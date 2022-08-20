function preload(){

}

function setup(){
    canvas= createCanvas(250,250);

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
        console.log("nose x ="+ results[0].pose.nose.x);
        console.log("nose y ="+ results[0].pose.nose.y);
    }

}
function modelLoaded(){
    console.log('poseNet is initialized' )
}
function draw(){

}
function takesnapshot(){
    save('selfie.png');
}