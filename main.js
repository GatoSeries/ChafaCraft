var canvas = new fabric.Canvas("MyCanvas");
var PosX = 10;
var PosY = 10;

var Width = 40;
var Height = 40;

var player = "";
var block = "";


function playerUpdate() {
    fabric.Image.fromURL("player.png", function (img) {
        player = img;
        player.scaleToWidth(170);
        player.scaleToHeight(160);

        player.set({
            top: PosY,
            left: PosX
        });
        canvas.add(player);
    })
}

function updateImg(name) {
    fabric.Image.fromURL(name, function (img) {
        block = img;

        block.scaleToWidth(Width);
        block.scaleToHeight(Height);

        block.set({
            top: PosY,
            left: PosX

        })
        canvas.add(block);

    })
}
window.addEventListener("keydown", my_kewdown);

function my_kewdown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (e.shiftKey == true && keyPressed == "80") {
        console.log("Shift + P");

        Width = Width + 10;
        Height = Height + 10;

        document.getElementById("current_width").innerHTML = Width;
        document.getElementById("current_height").innerHTML = Height;
    }
    if (e.shiftKey == true && keyPressed == "77") {
        console.log("Shift + M");

        Width = Width - 10;
        Height = Height - 10;

        document.getElementById("current_width").innerHTML = Width;
        document.getElementById("current_height").innerHTML = Height;
    }
    if (keyPressed == "38") {
        console.log("up");
        up();
    }
    if (keyPressed == "40") {

        console.log("down");
        down();
    }
    if (keyPressed == "37") {
        console.log("left");
        left();
    }
    if (keyPressed == "39") {
        console.log("right");
        right();
    }

    if (keyPressed == '87') {
        updateImg('wall.jpg');
        console.log("w");
    }
    if (keyPressed == '71') {
        updateImg('ground.png');
        console.log("g");

    }
    if (keyPressed == '76') {
        updateImg('light_green.png');
        console.log("l");

    }
    if (keyPressed == '84') {
        updateImg('trunk.jpg');
        console.log("t");

    }
    if (keyPressed == '82') {
        updateImg('roof.jpg');
        console.log("r");

    }
    if (keyPressed == '89') {
        updateImg('yellow_wall.png');
        console.log("y");

    }
    if (keyPressed == '68') {
        updateImg('dark_green.png');
        console.log("d");

    }
    if (keyPressed == '85') {
        updateImg('unique.png');
        console.log("u");

    }
    if (keyPressed == '67') {
        updateImg('cloud.jpg');
        console.log("c");

    }
}
function up() {
    if (PosY >= 0) {
        PosY = PosY - Height;
        canvas.remove(player);
        playerUpdate();
    }
}
function down() {
    if (PosY <= 500) {
        PosY = PosY + Height;
        canvas.remove(player);
        playerUpdate();
    }
}
function left() {
    if (PosX >= 0) {
        PosX = PosX - Width;
        canvas.remove(player);
        playerUpdate();
    }
}
function right() {
    if (PosX <= 850) {
        PosX = PosX + Width;
        canvas.remove(player);
        playerUpdate();
    }
}


