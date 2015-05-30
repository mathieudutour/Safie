Template.camera.onRendered(function() {
  var canvas = this.find("#camera");
  window.plugin.CanvasCamera.initialize(canvas);
  var options = {
    quality: 75,
    destinationType: CanvasCamera.DestinationType.DATA_URL,
    encodingType: CanvasCamera.EncodingType.JPEG,
    width: 640,
    height: 480
  };
  window.plugin.CanvasCamera.start(options);
});
