function permissionsGranted() {
   console.log('hello camera app')
         window.kmpJsBridge.callNative("Greet",JSON.stringify({message:"Hello"}),
           function (data) {
             startCamera();
             console.log("Greet from Native: " + data);
           }
         );
}

function startCamera() {
    if(navigator && navigator.mediaDevices){
        const options = { audio: false, video: { facingMode: "user", width: 200, height: 200  } }
        navigator.mediaDevices.getUserMedia(options)
        .then(function(stream) {
            var video = document.getElementById('video');
            video.srcObject = stream;
            video.onloadedmetadata = function(e) {
              video.play();
            };
        })
        .catch(function(err) {
            //Handle error here
            console.log("Failed to get camera stream:", err)
        });
    }else{
        console.log("camera API is not supported by your browser")
    }
}

document.addEventListener('DOMContentLoaded', function() {
        console.log("######################DOM loaded #########################")
        startCamera();
    });