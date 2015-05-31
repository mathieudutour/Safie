Template.login.events({
 'submit': function (event, template) {
   event.preventDefault();
   var email = template.find('#email').value;
   var password = template.find('#password').value;

    Session.set('success', null);
    Session.set('error', null);

   Meteor.loginWithPassword(email, password, function(error){
     if(error) {
      console.log(error);
      Session.set('error', error.message);
     } else {
       Router.goToPage(Router.Page.LANDING);
     }
   });
 },

 'click .back': function (e) {
   e.preventDefault();
   Router.goToPage(Router.Page.LANDING);
 }
});

Template.signup.events({
 'submit': function (event, template) {
   event.preventDefault();
   var email = template.find('#email').value;
   var password = template.find('#password').value;

   Session.set('success', null);
   Session.set('error', null);

   Accounts.createUser({
     email: email,
     password: password,
     profile: {
       trusted: null,
       name: email,
       timeoutNotification: 1, // 1 hour
       timeoutDelete: 7 // 7 days
     }
   }, function (error) {
     if (error) {
       Session.set('error', error.message);
       console.log("Cannot create user");
     } else {
       Router.goToPage(Router.Page.LANDING);
     }
   });
 },

 'click .back': function (e) {
   e.preventDefault();
   Router.goToPage(Router.Page.LANDING);
 }
});







