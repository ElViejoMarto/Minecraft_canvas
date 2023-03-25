var canvas = new fabric.Canvas("myCanvas");

block_image_width = 30;
block_image_height = 30;

var block_image_object = "";

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keycode;

    if(keyPressed == '67'){
        new_image('img/cloud.jpg');
        console.log("c");
    }
    if(keyPressed == "68"){
        new_image("img/dark_green.png");
        console.log("dg");
    }
    if(keyPressed == "71"){
        new_image("img/ground.png");
        console.log("g");
    }
    if(keyPressed == "76"){
        new_image("img/light_green.png");
        console.log("lg");
    }
    if(keyPressed == "82"){
        new_image("img/roof.jpg");
        console.log("r");
    }
    if(keyPressed == "84"){
        new_image("img/trunk.jpg");
        console.log("t");
    }
    if(keyPressed == "85"){
        new_image("img/unique.jpg");
        console.log("u");
    }
    if(keyPressed == "87"){
        new_image("img/wall.jpg");
        console.log("w");
    }
    if(keyPressed == "89"){
        new_image("img/yellow.wall.png");
        console.log("yw");
    }
    
    
}