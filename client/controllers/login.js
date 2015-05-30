Template.landing.events({
'click #login': function(e){
    e.preventDefault();
    Session.set('view', 'camera');
},
'click #signup': function(e){
    e.preventDefault();
    Session.set('view', 'camera');
},
  'submit': function(e){
    e.preventDefault();
}
});
