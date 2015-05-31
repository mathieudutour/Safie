Template.landing.events ({
  'click .login-button': function(){
    Router.goToPage(Router.Page.LOGIN);
  },
  'click .signup-button': function(){
    Router.goToPage(Router.Page.SIGNUP);
  }
});
