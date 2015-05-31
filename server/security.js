Meteor.methods({
	'security_code' : function(code) {
      check(code, Number);

      return Meteor.wrapAsync(function() {
        var user = Meteor.users.findOne(this.userId);
        var lastPicture = Pictures.findOne({userId: this.userId}, {sort: [['createdAt', -1]], limit: 1});
        if(parseInt(user.profile.code) === code) {
          Pictures.update({_id: lastPicture._id}, {$set: {triggered: false}});
          return {success: true};
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
          return {success: true};
        }
      });
	},
});
