Meteor.publish("history", function () {
  if (this.userId) {
    return Pictures.find({userId: this.userId}, {sort: [['createdAt', 'desc']], fields: {data: 0}});
  } else {
    this.ready();
  }
});

Meteor.publish("last", function () {
  if (this.userId) {
    return Pictures.find({userId: this.userId}, {sort: [['createdAt', 'desc']], limit: 1});
  } else {
    this.ready();
  }
});
