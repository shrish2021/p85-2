canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1Width = 120;
car1Height = 70;
car1_image = "car1.png";
car1X = 10;
car1Y = 10;

car2Width = 120;
car2Height = 70;
car2_image = "car2.png";
car2X = 10;
car2Y = 100;

backgroundImage = "racingcanvas.jpg";

function add() {
    backgroundImageTag = new Image();
    backgroundImageTag.onload = uploadBackground;
    backgroundImageTag.src = backgroundImage;

    car1Tag = new Image();
    car1Tag.onload = uploadcar1;
    car1Tag.src = car1_image;

    car2Tag = new Image();
    car2Tag.onload = uploadcar2;
    car2Tag.src = car2_image;
}

function uploadBackground() {
    ctx.drawImage(backgroundImageTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1Tag, car1X, car1Y, car1Width, car1Height);
}

function uploadcar2() {
    ctx.drawImage(car2Tag, car2X, car2Y, car2Width, car2Height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode
    console.log(keyPressed);
    if(keyPressed == '38') {
        car1up();
        console.log("Up arrow");
    }

    if(keyPressed == '40') {
        car1down();
        console.log("Down arrow");
    }
 
    if(keyPressed == '37') {
        car1left();
        console.log("Left arrow");
    }

    if(keyPressed == '39') {
        car1right();
        console.log("Right arrow");
    }

    if(keyPressed == '87') {
        car2up();
        console.log("W key");
    }

    if(keyPressed == '65') {
        car2left();
        console.log("A key");
    }

    if(keyPressed == '83') {
        car2down();
        console.log("S key");
    }

    if(keyPressed == '68') {
        car2right();
        console.log("D key");
    }
}

function car1up() {
    if(car1Y >= 0) {
        car1Y = car1Y - 10;
        console.log("When up arrow is pressed, x = " + car1X + " y = " + car1Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1down() {
    if(car1Y <= 500) {
        car1Y = car1Y + 10;
        console.log("When down arrow is pressed, x = " + car1X + " y = " + car1Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1left() {
    if(car1X >= 0) {
        car1X = car1X - 10;
        console.log("When left arrow is pressed, x = " + car1X + " y = " + car1Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1right() {
    if(car1X<= 500) {
        car1X = car1X + 10;
        console.log("When right arrow is pressed, x = " + car1X + " y = " + car1Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2up() {
    if(car2Y >= 0) {
        car2Y = car2Y - 10;
        console.log("When up arrow is pressed, x = " + car2X + " y = " + car2Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2down() {
    if(car2Y <= 500) {
        car2Y = car2Y + 10;
        console.log("When down arrow is pressed, x = " + car2X + " y = " + car2Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2left() {
    if(car2X >= 0) {
        car2X = car2X - 10;
        console.log("When left arrow is pressed, x = " + car2X + " y = " + car2Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2right() {
    if(car2X<= 500) {
        car2X = car2X + 10;
        console.log("When right arrow is pressed, x = " + car2X + " y = " + car2Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

if(car1X > 700) {
    console.log("Car 1 Wins!");
    document.getElementById("gameStatus").innerHTML = "Car 1 WON!! Car 2 LOST"
}

if(car2X > 700) {
    console.log("Car 2 Wins!");
    document.getElementById("gameStatus").innerHTML = "Car 2 WON!! Car 1 LOST"
}