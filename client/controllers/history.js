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
    return Pictures.find({userId: Meteor.userId()}, {sort: [['createdAt', 'desc']]}).map(function(doc, i) {
      doc.unsafe = i === 0 && new Date(doc.triggerAt) < new Date() && typeof doc.triggered === 'undefined';
      return doc;
    });
  },
  'isUnsafe': function() {
    var lastPicture = Pictures.findOne({userId: Meteor.userId()}, {sort: [['createdAt', 'desc']], limit: 1});
    return lastPicture && new Date(lastPicture.triggerAt) < new Date() && typeof lastPicture.triggered === 'undefined';
  }
});
