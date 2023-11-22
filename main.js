var canvas = new fabric.Canvas('myCanvas');
ball_y = 450;
ball_x = 350;
hole_y = 0;
hole_x = 350;

block_image_width = 5;
block_image_height = 5;

function load_img() {
	new_image();
}

function new_image() {
	fabric.Image.fromURL("football.png", function (Img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top: ball_y,
			left: ball_x
		});
		canvas.add(ball_obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if ((ball_x == 350) && (ball_y <= 50)) {
		canvas.remove(ball_obj);
		console.log("¡Anotación!");
		document.getElementById("hd3").innerHTML = "¡Anotación!";
		document.getElementById("myCanvas").style.borderColor = "red";
	} else {
		if (keyPressed == '38') {
			up();
			console.log("up");
		}
		if (keyPressed == '40') {
			down();
			console.log("down");
		}
		if (keyPressed == '37') {
			left();
			console.log("left");
		}
		if (keyPressed == '39') {
			right();
			console.log("right");
		}
	}

	function up() {
		if (ball_y >= 5) {
			ball_y = ball_y - block_image_height;
			console.log("alto de la imagen del bloque = " + block_image_height);
			console.log("Cuando se presione la tecla arriba, X =  " + ball_x + " , Y = " + ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function down() {
		if (ball_y <= 445) {
			ball_y = ball_y + block_image_height;
			console.log("alto de la imagen del bloque = " + block_image_height);
			console.log("Cuando se presione la tecla abajo, X =  " + ball_x + " , Y = " + ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function left() {
		if (ball_x >= 5) {
			ball_x = ball_x - block_image_width;
			console.log("ancho de la imagen del bloque = " + block_image_width);
			console.log("Cuando se presione la tecla izquierda, X =  " + ball_x + " , Y = " + ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function right() {
		if (ball_x <= 345) {
			ball_x = ball_x + block_image_width;
			console.log("ancho de la imagen del bloque = " + block_image_width);
			console.log("Cuando se presione la tecla derecha, X =  " + ball_x + " , Y = " + ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}
}
