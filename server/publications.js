Meteor.publish("history", function () {
  if (this.userId) {
    return Pictures.find({userId: this.userId}, {sort: [['createdAt', -1]], fields: {data: 0}});
  } else {
    this.ready();
  }
});

Meteor.publish("last", function () {
  if (this.userId) {
    return Pictures.find({userId: this.userId}, {sort: [['createdAt', -1]], limit: 1});
  } else {
    this.ready();
  }
});
