noseX=0;
noseY=0;

function preload(){
clown_nose=loadImage('https://i.postimg.cc/DyT03fhf/5315032-red-nose-png-image-transparent-background-graphics-red-nose-png-800-800-preview.png');
}

function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw(){
image(video,0,0,300,300);

//fill(255,0,0);
//stroke(255,0,0);
//circle(noseX,noseY,20);

image(clown_nose,noseX,noseY,30,30);

}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        noseX = results[0].pose.nose.x -10;
        noseY = results[0].pose.nose.y -10;

        console.log("nose x = "+ noseX);
        console.log("nose y = "+ noseY);
    }
}

function modelLoaded(){
    console.log("poseNet is initialized");
}
