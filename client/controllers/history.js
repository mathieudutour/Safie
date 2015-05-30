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
      doc.unsafe = i === 0 && doc.triggerAt < new Date();
      return doc;
    });
  },
  'isUnsafe': function() {
    var lastPicture = Pictures.findOne({userId: Meteor.userId()}, {sort: [['createdAt', 'desc']], limit: 1});
    console.log(lastPicture)
    return lastPicture && lastPicture.triggerAt < new Date();
  }
});
