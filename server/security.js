Meteor.methods({
	'security_code' : function(code) {

      var asyncFunc = function(userId, callback) {
        var user = Meteor.users.findOne(userId);
        var lastPicture = Pictures.findOne({userId: userId}, {sort: [['createdAt', -1]], limit: 1});
        if(parseInt(user.profile.code) === code) {
          Pictures.update({_id: lastPicture._id}, {$set: {triggered: false}});
          callback(null, {success: true});
        } else {
          Pictures.update({_id: lastPicture._id}, {$set: {triggered: true}});
          if (user.profile.trusted) {
            Email.send({
              from: 'watchguard@safie.com',
              subject: '[Safie] Could check on ' + user.profile.name +'?',
              to: user.profile.trusted,
              html: EmailTemplate.check(user, lastPicture)
            });
          }
          callback(null, {success: false});
        }
      };

      var syncFunc = Meteor.wrapAsync(asyncFunc);

      var res = syncFunc(this.userId); // Errors will be thrown

      return res;
	},
});
