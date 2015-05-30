Template.settings.events({
  'click .camera': function() {
    Swiper.moveLeft();
  },
  'click #logout': function() {
    Meteor.logout();
  }
});
