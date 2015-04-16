$(document).ready(function(){
	
document.body.onmousedown = function() { return false; } //so page is unselectable

	//Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	initializeLib(ctx);
	var w = $("#canvas").width();
	var h = $("#canvas").height();
	var mx, my;
   
	numObjects = 0;
	numObjectsLoaded =0;
	var screen = 0;
	var playgamebutton = createButton(450,300,100,150, null, "Classic mode"); 
     playgamebutton.job = function (){
     screen = 11 
    }

    var classic1readybutton = createButton(280,200,100,100,null,"Start"); 
        classic1readybutton.job = function(){
         screen = 2
        }
    
    var classic2readybutton = createButton(280,200,100,100,null,"Start"); 
        classic2readybutton.job = function(){
         screen = 5
        }

    var classic3readybutton = createButton(280,200,100,100,null,"Start"); 
        classic3readybutton.job = function(){
         screen = 6
        }
		
    var classic4readybutton = createButton(280,200,100,100,null,"Start"); 
        classic4readybutton.job = function(){
         screen = 8
        }
	
	
	var survivalbutton = createButton(450, 50, 100, 100, null, "Survival mode"); 
	   survivalbutton.job = function(){
	     screen = 10
	   }
	
	var survivalreadybutton = createButton(280,50,100,100,null,"Start"); 
	    survivalreadybutton.job = function(){
		 screen = 4
		}
	
    var mainmenubutton = createButton(20, 20, 50, 50, null, "Exit"); 
      mainmenubutton.job = function(){
      screen = 1
    }	  
	var inscbutton  = createButton(80, 50, 100, 100, null, "Instructions"); 
      inscbutton.job = function(){
      screen = 3
	}
	
	var twopbutton = createButton(80,300,100,100, null, "Two Player"); 
	    twopbutton.job = function(){
		 screen = 9
		 
		}
		
    var twopreadybutton = createButton(280,50,100,100,null, "Start"); 
	    twopreadybutton.job = function(){
		 screen = 7
		}
	var playerone = makePicture("Images/player1.jpg"); 
	var playertwo = makePicture("Images/player2.jpg"); 
	var background = makePicture("background.png") 
	var mainchar = createObjectPic("Images/board.png"); 
	var mainchar2 = createObjectPic("Images/board3.png"); 
	var mainchar3 = createObjectPic("Images/board3.png"); 
	var ball = createObjectPic("Images/ball.png"); //classic ball
	var ball2 = createObjectPic("Images/ball.png"); //survival balls
    var ball3 = createObjectPic("Images/ball.png");
    var ball4 = createObjectPic("Images/ball.png");
    var ball5 = createObjectPic("Images/ball.png"); 
    var ball6 = createObjectPic("Images/ball.png"); //2 player ball   	
	var brick = createObjectPic("Images/brick.png"); 
    var brick2 = createObjectPic("Images/brick.png"); 
	var brick3 = createObjectPic("Images/brick.png"); 
	var brick4 = createObjectPic("Images/brick.png"); 
	var brick5 = createObjectPic("Images/brick.png");
    var brick6 = createObjectPic("Images/brick.png"); 
    var brick7 = createObjectPic("Images/brick.png"); 
    var brick8 = createObjectPic("Images/brick.png"); 
    var brick9 = createObjectPic("Images/brick.png"); //stage 1  end
    var brick10 = createObjectPic("Images/brick.png");
    var brick11 = createObjectPic("Images/brick.png"); 
    var brick12 = createObjectPic("Images/brick.png"); 
    var brick13 = createObjectPic("Images/brick.png"); 
    var brick14 = createObjectPic("Images/brick.png"); 
    var brick15 = createObjectPic("Images/brick.png"); 
    var brick16 = createObjectPic("Images/brick.png"); 
    var brick17 = createObjectPic("Images/brick.png"); 
    var brick18 = createObjectPic("Images/brick.png"); 
    var brick19 = createObjectPic("Images/brick.png"); 
    var brick20 = createObjectPic("Images/brick.png");// stage 2 end 
    var brick21 = createObjectPic("Images/brick.png"); 
    var brick22 = createObjectPic("Images/brick.png"); 
    var brick23 = createObjectPic("Images/brick.png"); 
    var brick24 = createObjectPic("Images/brick.png"); 
    var brick25 = createObjectPic("Images/brick.png"); 
    var brick26 = createObjectPic("Images/brick.png"); 
    var brick27 = createObjectPic("Images/brick.png"); 
    var brick28 = createObjectPic("Images/brick.png"); 
    var brick29 = createObjectPic("Images/brick.png"); 
    var brick30 = createObjectPic("Images/brick.png");// stage 3  end 
    var brick30 = createObjectPic("Images/brick.png");
    var brick31 = createObjectPic("Images/brick.png");
    var brick32 = createObjectPic("Images/brick.png");
    var brick33 = createObjectPic("Images/brick.png");
    var brick34 = createObjectPic("Images/brick.png");
    var brick35 = createObjectPic("Images/brick.png");
    var brick36 = createObjectPic("Images/brick.png");
    var brick37 = createObjectPic("Images/brick.png");
    var brick38 = createObjectPic("Images/brick.png");
    var brick39 = createObjectPic("Images/brick.png");
    var brick40 = createObjectPic("Images/brick.png");
    var brick41 = createObjectPic("Images/brick.png");
    var brick42 = createObjectPic("Images/brick.png");
    var brick43 = createObjectPic("Images/brick.png");
    var brick44 = createObjectPic("Images/brick.png");
    var brick45 = createObjectPic("Images/brick.png");
    var brick46 = createObjectPic("Images/brick.png");
    var brick47 = createObjectPic("Images/brick.png");
    var brick48 = createObjectPic("Images/brick.png");
    var brick49 = createObjectPic("Images/brick.png");
    var brick50 = createObjectPic("Images/brick.png");
    var brick51 = createObjectPic("Images/brick.png");
    var brick52 = createObjectPic("Images/brick.png");
    var brick53 = createObjectPic("Images/brick.png");
    var brick54 = createObjectPic("Images/brick.png");
    var brick55 = createObjectPic("Images/brick.png");
    var brick56 = createObjectPic("Images/brick.png");
    var brick57 = createObjectPic("Images/brick.png");
    var brick58 = createObjectPic("Images/brick.png");
    var brick59 = createObjectPic("Images/brick.png");
    var brick60 = createObjectPic("Images/brick.png");
    var brick61 = createObjectPic("Images/brick.png");
    var brick62 = createObjectPic("Images/brick.png");
    var brick63 = createObjectPic("Images/brick.png");
    var brick64 = createObjectPic("Images/brick.png");
    var brick65 = createObjectPic("Images/brick.png");
    var brick66 = createObjectPic("Images/brick.png");
    var brick67 = createObjectPic("Images/brick.png");
    var brick68 = createObjectPic("Images/brick.png");
    var brick69 = createObjectPic("Images/brick.png");
    var brick70 = createObjectPic("Images/brick.png");
    var brick71 = createObjectPic("Images/brick.png");
    var brick72 = createObjectPic("Images/brick.png");
    var brick73 = createObjectPic("Images/brick.png");
    var brick74 = createObjectPic("Images/brick.png");
    var brick75 = createObjectPic("Images/brick.png");
    var brick76 = createObjectPic("Images/brick.png");
    var brick77 = createObjectPic("Images/brick.png");
    var brick78 = createObjectPic("Images/brick.png");
    var brick79 = createObjectPic("Images/brick.png");
    var brick80 = createObjectPic("Images/brick.png");	
	var score
    var block = createObjectPic("Images/topblock.png");
    var wider = createObjectPic("Images/powerup.png");
    var board2 = createObjectPic("Images/board2.png");
    var bbreak = addSound("Sounds/brickbreak.mp3");
    var bounce = addSound("Sounds/bounce.mp3"); 	
    	
	/////////////////////////////////
	////////////////////////////////
	////////	GAME INIT
	///////	Runs this code right away, as soon as the page loads.
	//////	Use this code to get everything in order before your game starts 
	//////////////////////////////
	/////////////////////////////
	function init()
	{
	/////////////////////
	///STATE VARIABLES
	/// All your variables get their start values here.



	


















	
	
	//////////////////////
	///GAME ENGINE START
	//	This starts your game/program
	//	"paint is the piece of code that runs over and over again, so put all the stuff you want to draw in here
	//	"60" sets how fast things should go
	//	Once you choose a good speed for your program, you will never need to update this file ever again.

	if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(paint, 60);
	}

	init();	
	
	mainchar.x = 330
	mainchar.y = 450
	mainchar.scale = .02
	
	mainchar2.scale = .02
	mainchar2.x = 10
	mainchar2.y = h/2
	
	mainchar3.scale = .02
	mainchar3.x = 610
	mainchar3.y = h/2
	
    ball.x = 100
	ball.y = 100  
    ball.scale = .02
	ball.speedx = 10
	ball.speedy = 10
	
	ball2.x = 50
	ball2.y = 200 
    ball2.scale = .02
	ball2.speedx = 5
	ball2.speedy = 5
	
	ball3.x = 20
	ball3.y =  h - 50
    ball3.scale = .02
	ball3.speedx = -10
	ball3.speedy = -10
	
	ball4.x = 50
	ball4.y = 100 
    ball4.scale = .02
	ball4.speedx = 3
	ball4.speedy = 3
	
	ball5.x = 50
	ball5.y = 100 
    ball5.scale = .02
	ball5.speedx = 7
	ball5.speedy = 7
	
	ball6.x = w/2
	ball6.y = h/2
	ball6.scale = .02
	ball6.speedy = 5
	ball6.speedx = 5
	
	
	brick.x = 200
	brick.y = 50
	
	brick2.x = 257
	brick2.y = 50
	
	brick3.x = 314
	brick3.y = 50
	
	brick4.x = 371
	brick4.y = 50
	
	brick5.x = 428
	brick5.y = 50
	
	brick6.x = 237
	brick6.y = 80
	
    brick7.x = 287
	brick7.y = 80
	
	brick8.x = 344
	brick8.y = 80
	
	brick9.x = 401
	brick9.y = 80
	
	brick10.x = 458
	brick10.y = 80
	
	brick11.x = 180                              
	brick11.y = 100
	
	brick12.x = 267
	brick12.y = 100
	
	brick13.x = 324
	brick13.y = 100
	
	brick14.x = 385
	brick14.y = 100
	
	brick15.x = 458
	brick15.y = 100
	
	brick16.x = 247
	brick16.y = 50
	
	brick17.x = 289
	brick17.y = 50
	
	brick18.x = 340
	brick18.y = 50
	
	brick19.x = 411
	brick19.y = 50
	
	brick20.x = 487
	brick20.y = 50
	
	brick21.x = 180                              
	brick21.y = 67                              
	
	brick22.x = 267
	brick22.y = 49
	
	brick23.x = 324
	brick23.y = 86
	
	brick24.x = 385
	brick24.y = 186
	
	brick25.x = 458
	brick25.y = 73
	
	brick26.x = 247
	brick26.y = 131
	
	brick27.x = 289
	brick27.y = 101
	
	brick28.x = 340
	brick28.y = 163
	
	brick29.x = 411
	brick29.y = 91
	
	brick30.x = 487
	brick30.y = 146
	
	brick31.x = 50                              
	brick31.y = 50                              
	
	brick32.x = 100
	brick32.y = 50
	
	brick33.x = 150
	brick33.y = 50
	
	brick34.x = 200
	brick34.y = 50
	
	brick35.x = 250
	brick35.y = 50
	
	brick36.x = 300
	brick36.y = 50
	
	brick37.x = 350
	brick37.y = 50
	
	brick38.x = 400
	brick38.y = 50
	
	brick39.x = 450
	brick39.y = 50
	
	brick40.x = 500
	brick40.y = 50
	
	brick41.x = 50                              
	brick41.y = 90                              
	
	brick42.x = 100
	brick42.y = 90
	
	brick43.x = 150
	brick43.y = 90
	
	brick44.x = 200
	brick44.y = 90
	
	brick45.x = 250
	brick45.y = 90
	
	brick46.x = 300
	brick46.y = 90
	
	brick47.x = 350
	brick47.y = 90
	
	brick48.x = 400
	brick48.y = 90
	
	brick49.x = 450
	brick49.y = 90
	
	brick50.x = 500
	brick50.y = 90
	
	brick51.x = 50                              
	brick51.y = 130                              
	
	brick52.x = 100
	brick52.y = 130
	
	brick53.x = 150
	brick53.y = 130
	
	brick54.x = 200
	brick54.y = 130
	
	brick55.x = 250
	brick55.y = 130
	
	brick56.x = 300
	brick56.y = 130
	
	brick57.x = 350
	brick57.y = 130
	
	brick58.x = 400
	brick58.y = 130
	
	brick59.x = 450
	brick59.y = 130
	
	brick60.x = 500
	brick60.y = 130
	
	brick61.x = 50                              
	brick61.y = 170                              
	
	brick62.x = 100
	brick62.y = 170
	
	brick63.x = 150
	brick63.y = 170
	
	brick64.x = 200
	brick64.y = 170
	
	brick65.x = 250
	brick65.y = 170
	
	brick66.x = 300
	brick66.y = 170
	
	brick67.x = 350
	brick67.y = 170
	
	brick68.x = 400
	brick68.y = 170
	
	brick69.x = 450
	brick69.y = 170
	
	brick70.x = 500
	brick70.y = 170
	
	brick71.x = 50                              
	brick71.y = 210                              
	
	brick72.x = 100
	brick72.y = 210
	
	brick73.x = 150
	brick73.y = 210
	
	brick74.x = 200
	brick74.y = 210
	
	brick75.x = 250
	brick75.y = 210
	
	brick76.x = 300
	brick76.y = 210
	
	brick77.x = 350
	brick77.y = 210
	
	brick78.x = 400
	brick78.y = 210
	
	brick79.x = 450
	brick79.y = 210
	
	brick80.x = 500
	brick80.y = 210
	
	brick.scale = .05
	brick2.scale = .05
    brick3.scale = .05
	brick4.scale = .05
	brick5.scale = .05
	brick6.scale = .05
	brick7.scale = .05
	brick8.scale = .05
	brick9.scale = .05
	brick10.scale = .05
	brick11.scale = .05
	brick12.scale = .05
    brick13.scale = .05
	brick14.scale = .05
	brick15.scale = .05
	brick16.scale = .05
	brick17.scale = .05
	brick18.scale = .05
	brick19.scale = .05
	brick20.scale = .05
	brick21.scale = .05
	brick22.scale = .05
    brick23.scale = .05
	brick24.scale = .05
	brick25.scale = .05
	brick26.scale = .05
	brick27.scale = .05
	brick28.scale = .05
	brick29.scale = .05
	brick30.scale = .05
	brick31.scale = .05
	brick32.scale = .05
    brick33.scale = .05
	brick34.scale = .05
	brick35.scale = .05
	brick36.scale = .05
	brick37.scale = .05
	brick38.scale = .05
	brick39.scale = .05
	brick40.scale = .05
	brick41.scale = .05
	brick42.scale = .05
    brick43.scale = .05
	brick44.scale = .05
	brick45.scale = .05
	brick46.scale = .05
	brick47.scale = .05
	brick48.scale = .05
	brick49.scale = .05
	brick50.scale = .05
	brick51.scale = .05
	brick52.scale = .05
    brick53.scale = .05
	brick54.scale = .05
	brick55.scale = .05
	brick56.scale = .05
	brick57.scale = .05
	brick58.scale = .05
	brick59.scale = .05
	brick60.scale = .05
	brick61.scale = .05
	brick62.scale = .05
    brick63.scale = .05
	brick64.scale = .05
	brick65.scale = .05
	brick66.scale = .05
	brick67.scale = .05
	brick68.scale = .05
	brick69.scale = .05
	brick70.scale = .05
	brick71.scale = .05
	brick72.scale = .05
    brick73.scale = .05
	brick74.scale = .05
	brick75.scale = .05
	brick76.scale = .05
	brick77.scale = .05
	brick78.scale = .05
	brick79.scale = .05
	brick80.scale = .05
	
	block.x = 0
	block.y = 0
	
	score = 0
	
	wider.x = 325
	wider.y = 0
	wider.speedy = 3
	wider.scale = .05
      
    board2.x = mainchar.x
	board2.y = mainchar.y
	board2.scale = .02
	
	
	///////////////////////////////////////////////////////
	//////////////////////////////////////////////////////
	////////	Main Game Engine
	////////////////////////////////////////////////////
	///////////////////////////////////////////////////
	function paint()
	{
		///////////////////////
		//	CLEAR THE SCREEN
		////////////////////
		ctx.fillStyle = '#80FF22';
		ctx.fillRect(0,0,w,h)
		
		
		
		if(screen == 0){
		/////////////////////
		//	LOADING SCREEN
			ctx.fillStyle = 'red';
			ctx.fillText("Loading Images & Sounds: " + numObjectsLoaded + "/" + numObjects,100,100)
		
			if(numObjectsLoaded >= numObjects) screen = 1;
		
		}else if(screen == 1){
		////////////////////
		//	MAIN MENU
		      playgamebutton.draw(); 
		      inscbutton.draw(); 
			  survivalbutton.draw();
              twopbutton.draw(); 			  
			  
			  score = 0
			  ball.x = 20
			  ball.y = 100
			  ball2.x = 20
			  ball2.y = 100
			  ball3.x = 20
			  ball3.y = 370
			  ball3.speedx = -10
			  ball3.speedy = -10
			  ball4.x = 20
			  ball4.y = 100
			  ball5.x = 20
			  ball5.y = 100
			  ball6.x = w/2
			  ball6.y = h/2
			  brick.x = 200
			  brick2.x = 257
			  brick3.x = 314
			  brick4.x = 371
			  brick5.x = 428
			  brick6.x = 237
			  brick7.x = 287
			  brick8.x = 344
			  brick9.x = 401
			  brick10.x = 458
			  brick11.x = 180
			  brick12.x = 267
			  brick13.x = 324
			  brick14.x = 385
			  brick15.x = 458
              brick16.x = 247
              brick17.x = 289			 
              brick18.x = 340
			  brick19.x = 411
			  brick20.x = 487
			  brick21.x = 180
			  brick22.x = 267
			  brick23.x = 324
			  brick24.x = 385
			  brick25.x = 458
              brick26.x = 247
              brick27.x = 289			 
              brick28.x = 340
			  brick29.x = 411
			  brick30.x = 487
			  brick31.x = 50
			  brick32.x = 100 
			  brick33.x = 150
			  brick34.x = 200
			  brick35.x = 250 
			  brick36.x = 300
			  brick37.x = 350
			  brick38.x = 400
			  brick39.x = 450
			  brick40.x = 500
			  brick41.x = 50
			  brick42.x = 100 
			  brick43.x = 150
			  brick44.x = 200
			  brick45.x = 250 
			  brick46.x = 300
			  brick47.x = 350
			  brick48.x = 400
			  brick49.x = 450
			  brick50.x = 500
			  brick51.x = 50
			  brick52.x = 100 
			  brick53.x = 150
			  brick54.x = 200
			  brick55.x = 250 
			  brick56.x = 300
			  brick57.x = 350
			  brick58.x = 400
			  brick59.x = 450
			  brick60.x = 500
			  brick61.x = 50
			  brick62.x = 100 
			  brick63.x = 150
			  brick64.x = 200
			  brick65.x = 250 
			  brick66.x = 300
			  brick67.x = 350
			  brick68.x = 400
			  brick69.x = 450
			  brick70.x = 500
			  brick71.x = 50
			  brick72.x = 100 
			  brick73.x = 150
			  brick74.x = 200
			  brick75.x = 250 
			  brick76.x = 300
			  brick77.x = 350
			  brick78.x = 400
			  brick79.x = 450
			  brick80.x = 500
			  
			  mainchar.x = 330
			  mainchar2.y = h/2
			  mainchar3.y = h/2
			  ball.speedx = 10
			  ball.speedy = 10
			  ball2.speedx = 5
			  ball2.speedy = 5
			  ball6.speedx = 5
			  ball6.speedy = 5
			
		
			
		
		}else if(screen == 2){
		////////////////////
		//	CLASSIC MODE
		
		if(mainchar.x > 570) {mainchar.x = w - mainchar.width}
		if(mainchar.x < 0) {mainchar.x = 0}
		
		
		   
          ball.draw(); 
          mainmenubutton.draw();
          mainchar.draw();
          brick.draw(); 		  
		  brick2.draw();
		  brick3.draw();
		  brick4.draw();
		  brick5.draw();
		  brick6.draw();
          brick7.draw();
          brick8.draw();
          brick9.draw(); 
          brick10.draw();   		  
		  
		  
		 
		   if(ball.x > w || ball.x < 0) {ball.speedx *= -1}
		   
		  
		 
		  if(ball.y > h || ball.y < 0) {ball.speedy *= -1}
		  
		  if (ball.y > mainchar.y){
		     screen = 1
			 mainchar.x = 330
			 ball.y = 100
			 ball.x = 20
			
			 alert("You Lose. Try Again!") 
		  }
		  
		  
		  
		  if(mainchar.collideObject(ball)){
		    ball.speedy *= -1
			ball.y = mainchar.y - 10
			//bounce.play(); 
			}
			
			 if(ball.collideObject(brick)){
			   brick.x = 1000 
			   ball.speedy *= -1
			   //bbreak.play(); 
			 }
			
			if(ball.collideObject(brick2)){
			   brick2.x = 1000
               ball.speedy *= -1
                //bbreak.play(); 			   
			 }
			
			
			if(ball.collideObject(brick3)){
			   brick3.x = 1000
               ball.speedy *= -1
              //bbreak.play(); 			   
			 }
			
			if(ball.collideObject(brick4)){
			   brick4.x = 1000 
			   ball.speedy *= -1
			   //bbreak.play(); 
			 }
			
			if(ball.collideObject(brick5)){
			   brick5.x = 1000 
			   ball.speedy *= -1
               //bbreak.play(); 			 
			 }
			 
			 if(ball.collideObject(brick6)){
			   brick6.x = 1000 
			   ball.speedy *= -1
			   //bbreak.play(); 
			 }
			
			if(ball.collideObject(brick7)){
			   brick7.x = 1000 
			   ball.speedy *= -1
			   //bbreak.play(); 
			 }
			 
			 if(ball.collideObject(brick8)){
			   brick8.x = 1000 
			   ball.speedy *= -1
			   //bbreak.play(); 
			 }
			 
			 if(ball.collideObject(brick9)){
			   brick9.x = 1000 
			   ball.speedy *= -1
			   //bbreak.play(); 
			 }
			 
			 if(ball.collideObject(brick10)){
			   brick10.x = 1000 
			   ball.speedy *= -1
			   //bbreak.play(); 
			 }
			
			 ball.x += ball.speedx
			 ball.y += ball.speedy
			
			
			
			if(brick.x == 1000 && brick2.x == 1000 && brick3.x == 1000 && brick4.x == 1000 && brick5.x == 1000 && brick6.x == 1000 && brick7.x == 1000 && brick8.x == 1000 && brick9.x == 1000 && brick10.x == 1000){
			   alert("You Win!") 
			   screen = 1
			   playgamebutton.job = function(){
			     screen = 12
			   }
			}
			
			
			
			
		}else if(screen == 3){
		//INSTRUCTIONS
		  ctx.font = "14pt Arial"
		  ctx.fillStyle = "blue" 
		  ctx.fillText("Survival mode", 50, 100);
          ctx.fillText("Use the arrow keys to move left and right", 50, 130); 
		  ctx.fillText("Keep the ball in the air. If you drop it, you lose!", 50, 160)
		  
		  ctx.fillStyle = "red"
		  ctx.fillText("Classic Mode", 50, 300); 
		  ctx.fillText("Use the arrow keys to move left and right.", 50, 330); 
		  ctx.fillText("Keep the ball in the air. If you drop it, you lose!", 50, 360); 
		  ctx.fillText("Break all the bricks to win!", 50, 390) 
		  
		mainmenubutton.draw();
		
		
		}
		
		else if(screen == 4){
		   //SURVIVAL MODE
		 
          mainmenubutton.draw();
          mainchar.draw();
		  
		 
	   
	  
		
		if(mainchar.x > 560) {mainchar.x = w - mainchar.width}
		if(mainchar.x < 0) {mainchar.x = 0}
		
		
		 
		 //first ball
		 
		  
		  ball2.draw();		  
		 
		 ball2.x += ball2.speedx
		 ball2.y += ball2.speedy
		 
		
		  if(ball2.x > w || ball2.x < 0) {ball2.speedx *= -1}
		   
		  
		 
		  if(ball2.y > h || ball2.y < 0) {ball2.speedy *= -1}
		  
		 
		  
		   if(mainchar.collideObject(ball2) && ball2.speedx < 42 && ball2.speedy < 22){
		    ball2.speedx += 1
			ball2.speedy += 0.5
			
		   }
		  
		    if(mainchar.collideObject(ball2)){
		    ball2.speedy *= -1
			ball2.y = mainchar.y - 10
			bounce.play();
			}
		    
			if (ball2.y > mainchar.y){
		     screen = 1
			 mainchar.x = 330
			 ball2.y = 100
			 ball2.x = 20
			 alert("You Lose. Try Again!")} 
			 
			  if(mainchar.collideObject(ball2)){
			    score += 1
			  }
			  //end of first ball code
			  
		
		
		
		ctx.fillStyle = "#0000FF" 
		ctx.font = "20pt Arial"
		ctx.fillText(score, 600, 25)
		
		if(score == 100){
		 alert("Don't you have better things to do than try to hit 100? ;)")
		 screen = 1
		}
		
		   
		  
		  }
		  
else if(screen == 5){
		    if(mainchar.x > 570) {mainchar.x = w - mainchar.width}
		if(mainchar.x < 0) {mainchar.x = 0}
		
		
		   
          ball.draw(); 
          mainmenubutton.draw();
          mainchar.draw();
          brick11.draw(); 		  
		  brick12.draw();
		  brick13.draw();
		  brick14.draw();
		  brick15.draw();
		  brick16.draw();
          brick17.draw();
          brick18.draw();
          brick19.draw(); 
          brick20.draw();   		  
		  
		  
		 
		   if(ball.x > w || ball.x < 0) {ball.speedx *= -1}
		   
		  
		 
		  if(ball.y > h || ball.y < 0) {ball.speedy *= -1}
		  
		  if (ball.y > mainchar.y){
		     screen = 1
			 mainchar.x = 330
			 ball.y = 100
			 ball.x = 20
			 brick11.x = 180
             brick16.x = 247
             brick12.x = 267
             brick17.x = 289			 
			 brick13.x = 324
			 brick18.x = 340
			 brick14.x = 385
			 brick19.x = 411
			 brick15.x = 458
			 brick20.x = 487
			 alert("You Lose. Try Again!") 
		  }
		  
		  
		  
		  if(mainchar.collideObject(ball)){
		    ball.speedy *= -1
			ball.y = mainchar.y - 10
			bounce.play();
			}
			
			 if(ball.collideObject(brick11)){
			   brick11.x = 1000 
			   ball.speedy *= -1
			   //bbreak.play(); 
			 }
			
			if(ball.collideObject(brick12)){
			   brick12.x = 1000
               ball.speedy *= -1
               //bbreak.play(); 			   
			 }
			
			
			if(ball.collideObject(brick13)){
			   brick13.x = 1000
               ball.speedy *= -1
               //bbreak.play(); 			   
			 }
			
			if(ball.collideObject(brick14)){
			   brick14.x = 1000 
			   ball.speedy *= -1
			   //bbreak.play(); 
			 }
			
			if(ball.collideObject(brick15)){
			   brick15.x = 1000 
			   ball.speedy *= -1
			   //bbreak.play(); 
			 }
			 
			 if(ball.collideObject(brick16)){
			   brick16.x = 1000 
			   ball.speedy *= -1
			   //bbreak.play(); 
			 }
			
			if(ball.collideObject(brick17)){
			   brick17.x = 1000 
			   ball.speedy *= -1
			   //bbreak.play(); 
			 }
			 
			 if(ball.collideObject(brick18)){
			   brick18.x = 1000 
			   ball.speedy *= -1
			   //bbreak.play(); 
			 }
			 
			 if(ball.collideObject(brick19)){
			   brick19.x = 1000 
			   ball.speedy *= -1
               //bbreak.play(); 
			 }
			 
			 if(ball.collideObject(brick20)){
			   brick20.x = 1000 
			   ball.speedy *= -1
			   //bbreak.play(); 
			 }
			
			 ball.x += ball.speedx
			 ball.y += ball.speedy
			
			
			
			if(brick11.x == 1000 && brick12.x == 1000 && brick13.x == 1000 && brick14.x == 1000 && brick15.x == 1000 && brick16.x == 1000 && brick17.x == 1000 && brick18.x == 1000 && brick19.x == 1000 && brick20.x == 1000){
			   alert("You Win!") 
			   screen = 1
			   playgamebutton.job = function(){
			     screen = 13
			   }
			}
		  
		  
		  }
		  
else if (screen == 6){
     if(mainchar.x > 570) {mainchar.x = w - mainchar.width}
		if(mainchar.x < 0) {mainchar.x = 0}
		
		
		   
          ball.draw(); 
          mainmenubutton.draw();
          mainchar.draw(); 
          brick21.draw(); 		  
		  brick22.draw();
		  brick23.draw();
		  brick24.draw();
		  brick25.draw();
		  brick26.draw();
          brick27.draw();
          brick28.draw();
          brick29.draw(); 
          brick30.draw();   		  
		  
		  
		 
		   if(ball.x > w || ball.x < 0) {ball.speedx *= -1}
		   
		  
		 
		  if(ball.y > h || ball.y < 0) {ball.speedy *= -1}
		  
		  if (ball.y > mainchar.y){
		     screen = 1
			 mainchar.x = 330
			 ball.y = 100
			 ball.x = 20
			 brick21.x = 180
             brick26.x = 247
             brick22.x = 267
             brick27.x = 289			 
			 brick23.x = 324
			 brick28.x = 340
			 brick24.x = 385
			 brick29.x = 411
			 brick25.x = 458
			 brick30.x = 487
			 alert("You Lose. Try Again!") 
		  }
		  
		  
		  
		  if(mainchar.collideObject(ball)){
		    ball.speedy *= -1
			ball.y = mainchar.y - 10
			bounce.play();
			}
			
			 if(ball.collideObject(brick21)){
			   brick21.x = 1000 
			   ball.speedy *= -1
			   //bbreak.play(); 
			 }
			
			if(ball.collideObject(brick22)){
			   brick22.x = 1000
               ball.speedy *= -1
               //bbreak.play(); 			   
			 }
			
			
			if(ball.collideObject(brick23)){
			   brick23.x = 1000
               ball.speedy *= -1
               //bbreak.play(); 			   
			 }
			
			if(ball.collideObject(brick24)){
			   brick24.x = 1000 
			   ball.speedy *= -1
			   //bbreak.play(); 
			 }
			
			if(ball.collideObject(brick25)){
			   brick25.x = 1000 
			   ball.speedy *= -1
			   //bbreak.play(); 
			 }
			 
			 if(ball.collideObject(brick26)){
			   brick26.x = 1000 
			   ball.speedy *= -1
			   //bbreak.play(); 
			 }
			
			if(ball.collideObject(brick27)){
			   brick27.x = 1000 
			   ball.speedy *= -1
			   //bbreak.play(); 
			 }
			 
			 if(ball.collideObject(brick28)){
			   brick28.x = 1000 
			   ball.speedy *= -1
			   //bbreak.play(); 
			 }
			 
			 if(ball.collideObject(brick29)){
			   brick29.x = 1000 
			   ball.speedy *= -1
			   //bbreak.play(); 
			 }
			 
			 if(ball.collideObject(brick30)){
			   brick30.x = 1000 
			   ball.speedy *= -1
			   //bbreak.play(); 
			 }
			
			 ball.x += ball.speedx
			 ball.y += ball.speedy
			
			
			
			if(brick21.x == 1000 && brick22.x == 1000 && brick23.x == 1000 && brick24.x == 1000 && brick25.x == 1000 && brick26.x == 1000 && brick27.x == 1000 && brick28.x == 1000 && brick29.x == 1000 && brick30.x == 1000){
			   alert("You Win!") 
			   screen = 1
			   playgamebutton.job = function(){
			     screen = 14
			   }
			}
 
    if(ball.x == brick26.x && ball.y == brick26.y){
	 ball6.speedy *= -1
	 brick26.x = 1000
	}

}

else if (screen == 7){
       mainchar2.draw(); 
       mainchar3.draw(); 
       ball6.draw(); 
       mainmenubutton.draw(); 	   
	   
	   if(ball6.x > w){ball6.speedx *= -1}
	   if(ball6.x < 0){ball6.speedx *= -1}
	   if(ball6.y > h){ball6.speedy *= -1}
	   if(ball6.y < 0){ball6.speedy *= -1}
	   
	   if(mainchar3.y > h){mainchar.y = h}
	   if(mainchar3.y < 0){mainchar.y = 0}
	   
	   if(mainchar2.y > h){mainchar.y = h}
	   if(mainchar2.y < 0){mainchar.y = 0}
 
    ball6.x += ball6.speedx 
    ball6.y += ball6.speedy 
 
     if(mainchar2.collideObject(ball6) && ball6.speedx < 10 && ball6.speedy < 10){
     ball6.speedx *= -1
     ball6.x += 10
	 ball6.speedx += .5
	 ball6.speedy += .5
	 bounce.play();
     } 

     if(mainchar3.collideObject(ball6) && ball6.speedx < 10 && ball6.speedy < 10){
	  ball6.speedx *= -1
	  ball6.x -= 10
	  ball6.speedx -= .5
	  ball6.speedy -= .5
	  bounce.play();
	 }
	 
	 if(ball6.x > mainchar3.x){
	  alert("Second Player Wins!")
      screen = 1
      ball6.x = w/2
      ball6.y = h/2
      mainchar2.y = h/2
      mainchar3.y = h/2	  
	 }
	 
	  if(ball6.x < mainchar2.x){
	  alert("First Player Wins!")
      screen = 1
      ball6.x = w/2
      ball6.y = h/2
      mainchar2.y = h/2
      mainchar3.y = h/2	  
	 }

}
		  
	else if(screen == 8){
   
   if(mainchar.x > 570) {mainchar.x = w - mainchar.width}
		if(mainchar.x < 0) {mainchar.x = 0}
		
		
		   
          ball3.draw(); 
          mainmenubutton.draw();
          mainchar.draw(); 
          brick31.draw(); 		  
		  brick32.draw();
		  brick33.draw();
		  brick34.draw();
		  brick35.draw();
		  brick36.draw();
          brick37.draw();
          brick38.draw();
          brick39.draw(); 
          brick40.draw();  
          brick41.draw(); 		  
		  brick42.draw();
		  brick43.draw();
		  brick44.draw();
		  brick45.draw();
		  brick46.draw();
          brick47.draw();
          brick48.draw();
          brick49.draw(); 
          brick50.draw();
          brick51.draw(); 		  
		  brick52.draw();
		  brick53.draw();
		  brick54.draw();
		  brick55.draw();
		  brick56.draw();
          brick57.draw();
          brick58.draw();
          brick59.draw(); 
          brick60.draw(); 
          brick61.draw(); 		  
		  brick62.draw();
		  brick63.draw();
		  brick64.draw();
		  brick65.draw();
		  brick66.draw();
          brick67.draw();
          brick68.draw();
          brick69.draw(); 
          brick70.draw();   		  
		  brick71.draw(); 		  
		  brick72.draw();
		  brick73.draw();
		  brick74.draw();
		  brick75.draw();
		  brick76.draw();
          brick77.draw();
          brick78.draw();
          brick79.draw(); 
          brick80.draw(); 
		  
		 
		   if(ball3.x > w || ball3.x < 0) {ball3.speedx *= -1}
		   
		  
		 
		  if(ball3.y > h || ball3.y < 0) {ball3.speedy *= -1}
		  
		  if (ball3.y > mainchar.y){
		     screen = 1
			 mainchar.x = 330
			 ball3.y = 370
			 ball3.x = 20
			
			 alert("You Lose. Try Again!") 
		  }
		  
		  
		  
		  if(mainchar.collideObject(ball3)){
		    ball3.speedy *= -1
			ball3.y = mainchar.y - 10
			bounce.play();
			}
			
			 if(ball3.collideObject(brick31)){
			   brick31.x = 1000 
			   ball3.speedy *= -1
			   //bbreak.play(); 
			 }
			
			if(ball3.collideObject(brick32)){
			   brick32.x = 1000
               ball3.speedy *= -1
               //bbreak.play(); 			   
			 }
			
			
			if(ball3.collideObject(brick33)){
			   brick33.x = 1000
               ball3.speedy *= -1
               //bbreak.play(); 			   
			 }
			
			if(ball3.collideObject(brick34)){
			   brick34.x = 1000 
			   ball3.speedy *= -1
			   //bbreak.play(); 
			 }
			
			if(ball3.collideObject(brick35)){
			   brick35.x = 1000 
			   ball3.speedy *= -1
			   //bbreak.play(); 
			 }
			 
			 if(ball3.collideObject(brick36)){
			   brick36.x = 1000 
			   ball3.speedy *= -1
			   //bbreak.play(); 
			 }
			
			if(ball3.collideObject(brick37)){
			   brick37.x = 1000 
			   ball3.speedy *= -1
			   //bbreak.play(); 
			 }
			 
			 if(ball3.collideObject(brick38)){
			   brick38.x = 1000 
			   ball3.speedy *= -1
			   //bbreak.play(); 
			 }
			 
			 if(ball3.collideObject(brick39)){
			   brick39.x = 1000 
			   ball3.speedy *= -1
			   //bbreak.play(); 
			 }
			 
			 if(ball3.collideObject(brick40)){
			   brick40.x = 1000 
			   ball3.speedy *= -1
			   //bbreak.play(); 
			 }
			 
			  if(ball3.collideObject(brick41)){
			   brick41.x = 1000 
			   ball3.speedy *= -1
			   //bbreak.play(); 
			 }
			
			if(ball3.collideObject(brick42)){
			   brick42.x = 1000
               ball3.speedy *= -1
               //bbreak.play(); 			   
			 }
			
			
			if(ball3.collideObject(brick43)){
			   brick43.x = 1000
               ball3.speedy *= -1
              // bbreak.play(); 			   
			 }
			
			if(ball3.collideObject(brick44)){
			   brick44.x = 1000 
			   ball3.speedy *= -1
			  // bbreak.play(); 
			 }
			
			if(ball3.collideObject(brick45)){
			   brick45.x = 1000 
			   ball3.speedy *= -1
			   //bbreak.play(); 
			 }
			 
			 if(ball3.collideObject(brick46)){
			   brick46.x = 1000 
			   ball3.speedy *= -1
			   //bbreak.play(); 
			 }
			
			if(ball3.collideObject(brick47)){
			   brick47.x = 1000 
			   ball3.speedy *= -1
			   //bbreak.play(); 
			 }
			 
			 if(ball3.collideObject(brick48)){
			   brick48.x = 1000 
			   ball3.speedy *= -1
			   //bbreak.play(); 
			 }
			 
			 if(ball3.collideObject(brick49)){
			   brick49.x = 1000 
			   ball3.speedy *= -1
			   //bbreak.play(); 
			 }
			 
			 if(ball3.collideObject(brick50)){
			   brick50.x = 1000 
			   ball3.speedy *= -1
			   //bbreak.play(); 
			 }
			 
			  if(ball3.collideObject(brick51)){
			   brick51.x = 1000 
			   ball3.speedy *= -1
			   //bbreak.play(); 
			 }
			
			if(ball3.collideObject(brick52)){
			   brick52.x = 1000
               ball3.speedy *= -1
               //bbreak.play(); 			   
			 }
			
			
			if(ball3.collideObject(brick53)){
			   brick53.x = 1000
               ball3.speedy *= -1
               //bbreak.play(); 			   
			 }
			
			if(ball3.collideObject(brick54)){
			   brick54.x = 1000 
			   ball3.speedy *= -1
			   //bbreak.play(); 
			 }
			
			if(ball3.collideObject(brick55)){
			   brick55.x = 1000 
			   ball3.speedy *= -1
			   //bbreak.play(); 
			 }
			 
			 if(ball3.collideObject(brick56)){
			   brick56.x = 1000 
			   ball3.speedy *= -1
			   //bbreak.play(); 
			 }
			
			if(ball3.collideObject(brick57)){
			   brick57.x = 1000 
			   ball3.speedy *= -1
			   //bbreak.play(); 
			 }
			 
			 if(ball3.collideObject(brick58)){
			   brick58.x = 1000 
			   ball3.speedy *= -1
			   //bbreak.play(); 
			 }
			 
			 if(ball3.collideObject(brick59)){
			   brick59.x = 1000 
			   ball3.speedy *= -1
			  // bbreak.play(); 
			 }
			 
			 if(ball3.collideObject(brick60)){
			   brick60.x = 1000 
			   ball3.speedy *= -1
			  // bbreak.play(); 
			 }
			 
			  if(ball3.collideObject(brick61)){
			   brick61.x = 1000 
			   ball3.speedy *= -1
			  // bbreak.play(); 
			 }
			
			if(ball3.collideObject(brick62)){
			   brick62.x = 1000
               ball3.speedy *= -1
              // bbreak.play(); 			   
			 }
			
			
			if(ball3.collideObject(brick63)){
			   brick63.x = 1000
               ball3.speedy *= -1
              // bbreak.play(); 			   
			 }
			
			if(ball3.collideObject(brick64)){
			   brick64.x = 1000 
			   ball3.speedy *= -1
			  // bbreak.play(); 
			 }
			
			if(ball3.collideObject(brick65)){
			   brick65.x = 1000 
			   ball3.speedy *= -1
			   //bbreak.play(); 
			 }
			 
			 if(ball3.collideObject(brick66)){
			   brick66.x = 1000 
			   ball3.speedy *= -1
			   //bbreak.play(); 
			 }
			
			if(ball3.collideObject(brick67)){
			   brick67.x = 1000 
			   ball3.speedy *= -1
			   //bbreak.play(); 
			 }
			 
			 if(ball3.collideObject(brick68)){
			   brick68.x = 1000 
			   ball3.speedy *= -1
			   //bbreak.play(); 
			 }
			 
			 if(ball3.collideObject(brick69)){
			   brick69.x = 1000 
			   ball3.speedy *= -1
			   //bbreak.play(); 
			 }
			 
			 if(ball3.collideObject(brick70)){
			   brick70.x = 1000 
			   ball3.speedy *= -1
			   //bbreak.play(); 
			 }
			 if(ball3.collideObject(brick71)){
			   brick71.x = 1000 
			   ball3.speedy *= -1
			   //bbreak.play(); 
			 }
			
			if(ball3.collideObject(brick72)){
			   brick72.x = 1000
               ball3.speedy *= -1
               //bbreak.play(); 			   
			 }
			
			
			if(ball3.collideObject(brick73)){
			   brick73.x = 1000
               ball3.speedy *= -1
               //bbreak.play(); 			   
			 }
			
			if(ball3.collideObject(brick74)){
			   brick74.x = 1000 
			   ball3.speedy *= -1
			   //bbreak.play(); 
			 }
			
			if(ball3.collideObject(brick75)){
			   brick75.x = 1000 
			   ball3.speedy *= -1
			   //bbreak.play(); 
			 }
			 
			 if(ball3.collideObject(brick76)){
			   brick76.x = 1000 
			   ball3.speedy *= -1
			   //bbreak.play(); 
			 }
			
			if(ball3.collideObject(brick77)){
			   brick77.x = 1000 
			   ball3.speedy *= -1
			   //bbreak.play(); 
			 }
			 
			 if(ball3.collideObject(brick78)){
			   brick78.x = 1000 
			   ball3.speedy *= -1
			   //bbreak.play(); 
			 }
			 
			 if(ball3.collideObject(brick79)){
			   brick79.x = 1000 
			   ball3.speedy *= -1
			   //bbreak.play(); 
			 }
			 
			 if(ball3.collideObject(brick80)){
			   brick80.x = 1000 
			   ball3.speedy *= -1
			   //bbreak.play(); 
			 }
			
			
			
			
			 ball3.x += ball3.speedx
			 ball3.y += ball3.speedy
			
			
			
			if(brick31.x == 1000 && brick32.x == 1000 && brick33.x == 1000 && brick34.x == 1000 && brick35.x == 1000 && brick36.x == 1000 && brick37.x == 1000 && brick38.x == 1000 && brick39.x == 1000 && brick40.x == 1000  
			&& brick41.x == 1000 && brick42.x == 1000 && brick43.x == 1000 && brick44.x == 1000 && brick45.x == 1000 && brick46.x == 1000 && brick47.x == 1000 && brick48.x == 1000 && brick49.x == 1000 && brick50.x == 1000 
			&& brick51.x == 1000 && brick52.x == 1000 && brick53.x == 1000 && brick54.x == 1000 && brick55.x == 1000 && brick56.x == 1000 && brick57.x == 1000 && brick58.x == 1000 && brick59.x == 1000 && brick60.x == 1000 
			&& brick61.x == 1000 && brick62.x == 1000 && brick63.x == 1000 && brick64.x == 1000 && brick65.x == 1000 && brick66.x == 1000 && brick67.x == 1000 && brick68.x == 1000 && brick69.x == 1000 && brick70.x == 1000 
			&& brick71.x == 1000 && brick62.x == 1000 && brick73.x == 1000 && brick74.x == 1000 && brick75.x == 1000 && brick76.x == 1000 && brick77.x == 1000 && brick78.x == 1000 && brick79.x == 1000 && brick80.x == 1000){
			   alert("You Win!") 
			   screen = 1
			   playgamebutton.job = function(){
			     screen = 14
			   }
			}
 
    


}	

    else if(screen == 9){
	 twopreadybutton.draw(); 
	 mainchar2.draw(); 
	 mainchar3.draw(); 
	 ball6.draw();
     ctx.drawImage(playerone, 480, 30, 150, 150)
     ctx.drawImage(playertwo, 10, 30, 150, 150)	 
	 
	}
	
	else if (screen == 10){
	 mainchar.draw(); 
	 ball2.draw();
     survivalreadybutton.draw(); 	 
	
	}
	
	else if (screen == 11){
	 mainchar.draw(); 
	 ball.draw(); 
	 brick.draw(); 		  
     brick2.draw();
	 brick3.draw();
	 brick4.draw();
     brick5.draw();
     brick6.draw();
     brick7.draw();
     brick8.draw();
     brick9.draw(); 
     brick10.draw();
     classic1readybutton.draw(); 	 
	}
	
	else if(screen == 12){
	mainchar.draw(); 
	ball.draw();
	brick11.draw(); 		  
		  brick12.draw();
		  brick13.draw();
		  brick14.draw();
		  brick15.draw();
		  brick16.draw();
          brick17.draw();
          brick18.draw();
          brick19.draw(); 
          brick20.draw();
	classic2readybutton.draw(); 
	}
	
	else if(screen == 13){
	 mainchar.draw(); 
	 ball.draw(); 
	 brick21.draw();
	 brick22.draw();
	 brick23.draw();
	 brick24.draw();
	 brick25.draw();
	 brick26.draw();
	 brick27.draw();
	 brick28.draw();
	 brick29.draw();
	 brick30.draw(); 
	 classic3readybutton.draw(); 
	}
	
	else if(screen == 14){
	  mainchar.draw(); 
      ball3.draw();
      classic4readybutton.draw(); 
      brick31.draw(); 		  
		  brick32.draw();
		  brick33.draw();
		  brick34.draw();
		  brick35.draw();
		  brick36.draw();
          brick37.draw();
          brick38.draw();
          brick39.draw(); 
          brick40.draw();  
          brick41.draw(); 		  
		  brick42.draw();
		  brick43.draw();
		  brick44.draw();
		  brick45.draw();
		  brick46.draw();
          brick47.draw();
          brick48.draw();
          brick49.draw(); 
          brick50.draw();
          brick51.draw(); 		  
		  brick52.draw();
		  brick53.draw();
		  brick54.draw();
		  brick55.draw();
		  brick56.draw();
          brick57.draw();
          brick58.draw();
          brick59.draw(); 
          brick60.draw(); 
          brick61.draw(); 		  
		  brick62.draw();
		  brick63.draw();
		  brick64.draw();
		  brick65.draw();
		  brick66.draw();
          brick67.draw();
          brick68.draw();
          brick69.draw(); 
          brick70.draw();   		  
		  brick71.draw(); 		  
		  brick72.draw();
		  brick73.draw();
		  brick74.draw();
		  brick75.draw();
		  brick76.draw();
          brick77.draw();
          brick78.draw();
          brick79.draw(); 
          brick80.draw(); 	  
	
	
	}
		
	}////////////////////////////////////////////////////////////////////////////////END PAINT/ GAME ENGINE
	

	

	
	
	
	//////////////////////////////////////////////////////
	//////////////////////////////////////////////////////
	/////	MOUSE LISTENER 
	//////////////////////////////////////////////////////
	//////////////////////////////////////////////////////
	
	/////////////////
	// Mouse Click
	///////////////
	canvas.addEventListener('click', function (evt){
		
		//Runs this code whenever the mouse is clicked
		//For more screens for your game, just add more else ifs
		if(screen == 0){
		  
		
		}else if (screen == 1){
		    if(survivalbutton.isMouseOver()) survivalbutton.job() 
			if(playgamebutton.isMouseOver()) playgamebutton.job()
		    if(inscbutton.isMouseOver()) inscbutton.job()
			if(twopbutton.isMouseOver()) twopbutton.job()
		}
		
		else if (screen == 2){
	      if(mainmenubutton.isMouseOver()) mainmenubutton.job() 	
		} 
		
		else if (screen == 3){
		if(mainmenubutton.isMouseOver()) mainmenubutton.job()
		}
		
		else if (screen == 4){
		if(mainmenubutton.isMouseOver()) mainmenubutton.job()
		}
	   
		else if (screen == 5){
		 if(mainmenubutton.isMouseOver()) mainmenubutton.job()
		}
		
		else if (screen == 6){
		 if(mainmenubutton.isMouseOver()) mainmenubutton.job() 
		}
		
		else if (screen == 7){
		 if(mainmenubutton.isMouseOver()) mainmenubutton.job() 
		}
		
		else if (screen == 8){
		 if(mainmenubutton.isMouseOver()) mainmenubutton.job() 
		}
		
		else if(screen == 9){
		 if(twopreadybutton.isMouseOver()) twopreadybutton.job() 
		}
		
		else if(screen == 10){
		 if(survivalreadybutton.isMouseOver()) survivalreadybutton.job()
		}
		
		else if(screen == 11){
		 if(classic1readybutton.isMouseOver()) classic1readybutton.job() 
		}
		
		else if(screen == 12){
		 if(classic2readybutton.isMouseOver()) classic2readybutton.job() 
		}
		
		else if(screen == 13){
		 if(classic3readybutton.isMouseOver()) classic3readybutton.job() 
		}
		
		else if(screen == 14){
		 if(classic4readybutton.isMouseOver()) classic4readybutton.job() 
		}
	}, false);

	
	

	canvas.addEventListener ('mouseout', function(){pause = true;}, false);
	canvas.addEventListener ('mouseover', function(){pause = false;}, false);

      	canvas.addEventListener('mousemove', function(evt) {
        	var mousePos = getMousePos(canvas, evt);

		mx = mousePos.x;
		my = mousePos.y;
		updateMouse(mx,my);

      	}, false);


	function getMousePos(canvas, evt) 
	{
	        var rect = canvas.getBoundingClientRect();
        	return {
          		x: evt.clientX - rect.left,
          		y: evt.clientY - rect.top
        		};
      	}
      

	///////////////////////////////////
	//////////////////////////////////
	////////	KEY BOARD INPUT
	////////////////////////////////


	

	window.addEventListener('keydown', function(evt){
		var key = evt.keyCode;
		
	//p 80
	//r 82
	//1 49
	//2 50
	//3 51
	// up 38
	//down 40
	//right 39
	//left 37
	//W 87
	//S 83
	
		if(key==37){//left
		 mainchar.x -= 10
		 
	
		}else if (key == 38 && mainchar3.y > 0){//up
		 mainchar3.y -= 10
		 
	
		}else if (key == 39){//right
		  mainchar.x += 10
	
		}else if (key == 40 && mainchar3.y < 401){//down
		 mainchar3.y += 10
		}
		
		else if (key == 87 && mainchar2.y > 0){//W
		 mainchar2.y -= 10
		}
		
		else if (key == 83 && mainchar2.y < 401){//S
		 mainchar2.y += 10
		}
		
	}, false); //End the event listener

	

	

})

