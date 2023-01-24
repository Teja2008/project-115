var nosex= 0;
var nosey= 0;
function preload(){
    libstick= loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup(){
    canvas= createCanvas(300,300);

canvas.center();
video= createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded );
poseNet.on('pose',gotPoses);


}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex= results[0].pose.nose.x
        nosey= results[0].pose.nose.y
        console.log("nose x ="+ nosex);
        console.log("nose y ="+ nosey);
    }

}
function modelLoaded(){
    console.log('poseNet is initialized' )
}
function draw(){
image(video,0,0,300,300)

image(libstick, nosex-40,nosey,50,20)
}
function takesnapshot(){
    save('selfie.png');
}