Pictures = new Mongo.Collection("pictures");

Pictures.allow({
  insert: function(userId, doc) {
    return true;
  },
  update: function(userId, doc, fields, modifier) {
    return true;
  },
  remove: function(userId, doc) {
    return false;
  }
});

/*

{
	_id,
	data,
	localisation,
	userId,
	createdAt,
	removeAt,
    triggerAt,
    triggered
}

*/
