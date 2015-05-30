if (Meteor.isCordova) {
  Meteor.startup(function() {
    Template.center.onRendered(function() {
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
        window.resolveLocalFileSystemURI(result[0],
          // success callback; generates the FileEntry object needed to convert to Base64 string
          function (fileEntry) {
            // convert to Base64 string
            function win(file) {
              var reader = new FileReader();
              reader.onloadend = function (evt) {
                console.log("read success");
                Pictures.insert({
                  data: evt.target.result,
                  localisation: window.currentLocation,
                  userId: Meteor.userId(),
                  createdAt: new Date(),
                  removeAt: new Date() + Meteor.user().profile.timeoutDelete,
                  triggerAt: new Date() + Meteor.user().profile.timeoutNotification,
                }, function(err, id) {console.log(err); console.log(id);});
              };
              reader.readAsDataURL(file);
            }
            var fail = function (evt) {console.log(evt);};
            fileEntry.file(win, fail);
          },
          // error callback
          function (err) {console.log(err);}
        );
      });
    });
  });
} else {
  Template.center.onRendered(function() {
    this.find('.camera').style.backgroundColor = '#000';
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
