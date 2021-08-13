//Create a reference for canvas 
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
//Give specific height and width to the car image

background_image = "parkingLot.jpg";
car2_image = "car2.png";

console.log("background_image = " + background_image);

//Set initial position for a car image.

car2_x = 5;
car2_y = 225;
car2_width = 75;
car2_height = 100;

function add() { 
	

	background_imgTag = new Image(); //defining a variable with a new image
    background_imgTag.onload = uploadBackground(); // setting a function, onloading this variable
    background_imgTag.src = background_image;   // load image

    car2_imgTag = new Image(); //defining a variable with a new image
    car2_imgTag.onload = uploadgreencar; // setting a function, onloading this variable
	car2_imgTag.src = car2_image;   // load image
	//upload car, and background images on the canvas.
}

function uploadBackground() {
	 ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
	//Define function ‘uploadBackground’

}

function uploadgreencar() {
	 ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
	//Define function ‘uploadgreencar’.

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(car2_y >=0)
    {
        car2_y = car2_y - 10; 
        console.log("when up arrow is pressed, x = " + car2_x + "and y = " + car2_y); 
        uploadBackground(); 
        uploadgreencar(); 
    }
	//Define function to move the car upward
}

function down()
{ if(car2_y <=500)
    {
        car2_y = car2_y + 10; 
        console.log("when down arrow is pressed, x = " + car2_x + "and y = " + car2_y); 
        uploadBackground(); 
        uploadgreencar(); 
    }
	//Define function to move the car downward
}

function left()
{ if(car2_x >=0)
    {
        car2_x = car2_x - 10; 
        console.log("when left arrow is pressed, x = " + car2_x + "and y = " + car2_y); 
        uploadBackground(); 
        uploadgreencar(); 
    }
	//Define function to move the car left side
}

function right()
{ 
	if(car2_x <=700)
    {
        car2_x = car2_x + 10; 
        console.log("when right arrow is pressed, x = " + car2_x + "and y = " + car2_y); 
        uploadBackground(); 
        uploadgreencar(); 
    }
	//Define function to move the car right side
}
