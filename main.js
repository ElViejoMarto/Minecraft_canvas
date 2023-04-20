var canvas = new fabric.Canvas("myCanvas");

block_image_width = 30;
block_image_height = 30;
steve_x = 10;
steve_y = 10;
steve_h = 100;
steve_w = 100;

var block_image_object = "";
var steve_image_object = "";

function new_image(get_image){ // función que inserta imagen
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        canvas.add(block_image_object);//Agrego el objeto bloque al canvas
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;

    if (keyPressed == '67') {
        new_image('img/cloud.jpg');
        console.log("c");
    }
    if (keyPressed == "68") {
        new_image("img/dark_green.png");
        console.log("dg");
    }
    if (keyPressed == "71") {
        new_image("img/ground.png");
        console.log("g");
    }
    if (keyPressed == "76") {
        new_image("img/light_green.png");
        console.log("lg");
    }
    if (keyPressed == "82") {
        new_image("img/roof.jpg");
        console.log("r");
    }
    if (keyPressed == "84") {
        new_image("img/trunk.jpg");
        console.log("t");
    }
    if (keyPressed == "85") {
        new_image("img/unique.png");
        console.log("u");
    }
    if (keyPressed == "87") {
        new_image("img/wall.jpg");
        console.log("w");
    }
    if (keyPressed == "89") {
        new_image("img/yellow.wall.png");
        console.log("yw");
    }
    if (keyPressed == "38") {
        up();
        console.log("up fue activado")
    }


}
function player_update(){
	fabric.Image.fromURL("img/sc.png", function(Img){
        steve_image_object=Img;
        steve_image_object.scaleToWidth(steve_w);
        steve_image_object.scaleToHeight(steve_h);
        canvas.add(steve_image_object);//Agrego el objeto bloque al canvas
    });
}
function up() {
    if (steve_y <= 0) {
        steve_y = steve_y - block_image_height
        canvas.remove(steve_image_object)
        steve_update()
    }

}