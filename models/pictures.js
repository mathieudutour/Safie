Pictures = new Mongo.Collection("pictures");

Pictures.allow({
  insert: function(userId, doc) {
    return true;
  },
  update: function(userId, doc, fields, modifier) {
    return false;
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
}

*/
