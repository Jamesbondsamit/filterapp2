function setup(){
    canvas=createCanvas(380, 400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,400);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
   
}
 function modelLoaded(){
     console.log('Posenet is loaded ');

 }

 function gotPoses(results){
     if(results.length>0){
         console.log(results);
         console.log("nosex="+results[0].pose.nose.x);
         console.log("nose y="+results[0].pose.nose.y);
     }
 }

 function draw(){
    image(video,0,0,380,400);
 }
function take_snapshot(){
    save('smile.jpeg');

}

