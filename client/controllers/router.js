Template.router.helpers({
goToApp: function () {
    console.log("in goToApp");
    console.log("Session:");
    console.log(Session.get('view'));
    return Session.equals('view','camera');
}
});
