Template.router.helpers({
  loginPage: function () {
      return Router.isCurrentPage(Router.Page.LOGIN);
  },
  signupPage: function () {
      return Router.isCurrentPage(Router.Page.SIGNUP);
  },
  pinPage: function () {
      return Router.isCurrentPage(Router.Page.PIN);
  }
});
