Webcam.set({
    width:350,
    height:300,
    image_format: "png",
    png_quality: 99
});

camera = document.getElementById("webcam");

Webcam.attach('#webcam');

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='img_capture' src="+data_uri+"/>";
    });
}

console.log("ml5v-",ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/OunYAxwjg/',modelLoaded);

function modelLoaded() {
    console.log("Model loaded.");
}