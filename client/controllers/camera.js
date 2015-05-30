if (Meteor.isCordova) {
  Meteor.startup(function() {
    window.currentLocation = null;
    Tracker.autorun( function() {
      window.currentLocation = Geolocation.currentLocation();
    });
    var tapEnabled = false; //enable tap take picture
    var dragEnabled = false; //enable preview box drag across the screen
    var toBack = true; //send preview box to the back of the webview
    var rect = {x: 0, y: 0, width: document.body.offsetWidth, height:document.body.offsetHeight};
    cordova.plugins.camerapreview.startCamera(rect, "front", tapEnabled, dragEnabled, toBack);

    // handle picture taken
    cordova.plugins.camerapreview.setOnPictureTakenHandler(function(result){
        document.getElementById('originalPicture').src = result[0];//originalPicturePath;
        document.getElementById('previewPicture').src = result[1];//previewPicturePath;
    });
  });
}

Template.camera.events({
  'click .reverse-camera': function() {
    if (Meteor.isCordova) {
      cordova.plugins.camerapreview.switchCamera();
    }
  },

  'click .take-picture': function() {
    if (Meteor.isCordova) {
      cordova.plugins.camerapreview.takePicture({maxWidth:640, maxHeight:640});
    }
  }
});
