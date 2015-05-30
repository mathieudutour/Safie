Template.router.helpers({
goToApp: function () {
    return Session.get('view') === 'camera';
}
});
