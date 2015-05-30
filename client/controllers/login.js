Template.landing.events ({
  'click .login': function(){
    Router.goToPage(Router.Page.LOGIN);
  },
  'click .signup': function(){
    Router.goToPage(Router.Page.SIGNUP);
  }
});
