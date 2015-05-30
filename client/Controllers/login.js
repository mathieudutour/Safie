Template.landing.events({
'click #login': function(){
    Session.set('view', 'camera');
    console.log("login pressed");
},
'click #signup': function(){
    Session.set('view', 'camera');
}
});
