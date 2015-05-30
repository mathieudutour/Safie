Template.history.events({
  'click .camera': function() {
    Swiper.moveRight();
  },

  'click #imSafe': function(e) {
    e.preventDefault();
    Router.goToPage(Router.Page.PIN);
  },
});

Template.history.helpers({
  'photos': function() {
    return Pictures.find({userId: Meteor.userId()}, {sort: [['createdAt', -1]]}).map(function(doc, i) {
      doc.unsafe = i === 0 && doc.triggerAt < new Date();
      return doc;
    });
  },
  'isUnsafe': function() {
    return true;
    var lastPicture = Pictures.findOne({userId: Meteor.userId()}, {sort: [['createdAt', -1]], limit: 1});
    return lastPicture && lastPicture.triggerAt < new Date();
  }
});
