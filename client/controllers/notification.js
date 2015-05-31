Template.notification.helpers({
  message: function(){
     return Session.get('error') || Session.get('success');
  },
  msgType: function(){
      return Session.get('error') ? 'error' : 'success';
  },
  show: function(){
      return Session.get('error') || Session.get('success');
  }
});
