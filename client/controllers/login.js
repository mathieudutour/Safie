Template.login.events({
  'submit': function (event, template) {
    event.preventDefault();
    var email = template.find('#email').value;
    var password = template.find('#password').value;

    Meteor.loginWithPassword(email, password, function(error){
      if(error) {
       console.log(error);
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

    Accounts.createUser({
      email: email,
      password: password,
      profile: {
        trusted: null,
        name: email,
        timeoutNotification: 3600, // 1 hour
        timeoutDelete: 604800 // 7 days
      }
    }, function (error) {
      if (error) {
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
