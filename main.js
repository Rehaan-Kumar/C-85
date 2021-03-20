canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
console.log(ctx);

bgImg_array = ["mars.jpg", "mars_img_1.jpg", "mars_img_2.jpg", "mars_img_3.jpg"]
random_number = Math.floor(Math.random() * 4)
backgroundImg = bgImg_array[random_number]
roverImg = "rover.png";
rover_x = 10;
rover_y = 10;
rover_height = 90;
rover_width = 100;

function add() {
    bgTag = new Image();
    bgTag.onload = bg_upload;
    bgTag.src = backgroundImg;

    roverTag = new Image();
    roverTag.onload = rover_upload;
    roverTag.src = roverImg;

}

function bg_upload() {
    ctx.drawImage(bgTag, 0, 0, canvas.width, canvas.height);
}

function rover_upload() {
    ctx.drawImage(roverTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", keyDown)

function keyDown(e) {
    console.log(e)
    keyPressed = e.keyCode
    if (keyPressed == "38") {
        up()
        console.log("up")
    }

    if (keyPressed == "37") {
        left()
        console.log("left")
    }

    if (keyPressed == "39") {
        right()
        console.log("right")
    }

    if (keyPressed == "40") {
        down()
        console.log("down")
    }

    if (keyPressed == "32") {
        change_bg()
    }

}

function up() {
    if (rover_y > 0) {
        rover_y = rover_y - 10;
        console.log(rover_y);
        bg_upload();
        rover_upload();
    }
}

function down() {
    if (rover_y < 500) {
        rover_y = rover_y + 10;
        console.log(rover_y);
        bg_upload();
        rover_upload();
    }
}

function left() {
    if (rover_x > 0) {
        rover_x = rover_x - 10;
        console.log(rover_x);
        bg_upload();
        rover_upload();
    }
}

function right() {
    if (rover_x < 700) {
        rover_x = rover_x + 10;
        console.log(rover_x);
        bg_upload();
        rover_upload();
    }
}

function change_bg() {
    random_number = Math.floor(Math.random() * 4);
    backgroundImg = bgImg_array[random_number];
    add();
}