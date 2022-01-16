video = "";

function setup()
{
   canvas = createCanvas(500, 400);
   canvas.center();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status  = true;
}

function draw()
{
    image(img, 0, 0, 500, 400);
}