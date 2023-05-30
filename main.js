song="";

function preload()
{
    song = loadSound("videoplayback.m4a");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,500)
}

function play(){
    song.play();
}