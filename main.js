noseX=0;
noseY=0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/2yWxFYZF/Clown-Nose.png');
}

function setup() {
canvas = createCanvas(300, 300);
canvas.position(530,160);
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', getPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
image(video, 0, 0, 300, 300);
image(clown_nose, noseX, noseY, 30, 30);
}

function getPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function take_snapshot() {
    save('myFilterImage.png');
}