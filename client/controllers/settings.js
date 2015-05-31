Template.settings.events({
  'click .camera': function() {
    Swiper.moveLeft();
  },
  'click #logout': function() {
    Meteor.logout();
  },
  'click #submitSettings': function(e, t) {
    e.preventDefault();
    var name = t.find('#name').value;
    var trusted = t.find('#trusted').value;
    var notif = t.find('#notif').value;
    var deleteTime = t.find('#delete').value;
    var code = t.find('#code').value;

    Session.set('success', null);
    Session.set('error', null);

    Meteor.users.update(Meteor.userId(), {$set:{'profile.name': name, 'profile.trusted': trusted, 'profile.timeoutDelete': deleteTime, 'profile.timeoutNotification': notif}}, function(error){
      if(error){
        Session.set('error', 'Try again');
      } else {
        Session.set('success', 'Changes saved');
      }
    });

    if (code && code !== "") {
      Meteor.users.update(Meteor.userId(), {$set:{'profile.code': parseInt(code)}});
    }
  }
});
