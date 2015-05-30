Template.landing.events ({
'click #login': function(){
    console.log("login pressed view not changed");
    Session.set('view', 'camera');
    console.log(Session.get('view'));
    console.log("login view changedpressed");
},
'click #signup': function(){
    Session.set('view', 'camera');
}
});
