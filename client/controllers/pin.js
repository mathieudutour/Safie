// Used to check what input field is empty
var emptyPin = function (t) {
  if (t.find("#pin1").value === "")
    return 0;
  else if (t.find("#pin2").value === "")
    return 1;
  else if (t.find("#pin3").value === "")
    return 2;
  else if (t.find("#pin4").value === "")
    return 3;
  else
    return null;
};

var enterPin = function (t, pinIndex, pinValue) {
  console.log("Pin: " + pinValue);
  if (pinIndex === 0)
    t.find("#pin1").value = pinValue;
  else if (pinIndex === 1)
    t.find("#pin2").value = pinValue;
  else if (pinIndex === 2)
    t.find("#pin3").value = pinValue;
  else if (pinIndex === 3)
    t.find("#pin4").value = pinValue;
  else if (pinIndex === null) {
    var pin1 = t.find("#pin1").value;
    var pin2 = t.find("#pin2").value;
    var pin3 = t.find("#pin3").value;
    var pin4 = t.find("#pin4").value;
    console.log("Full pin: " + pin1 + pin2 + pin3 + pin4);
  }
};

var deletePin = function (t, pinIndex) {
  if (pinIndex === 0)
    t.find("#pin1").value = "";
  if (pinIndex === 1)
    t.find("#pin2").value = "";
  if (pinIndex === 2)
    t.find("#pin3").value = "";
  if (pinIndex === 3)
    t.find("#pin4").value = "";
};

Template.pincode.events({
  'click #1': function (e, t) {
    var selectedInput = emptyPin(t);
    enterPin(t, selectedInput, 1);
    e.preventDefault();
  },
  'click #2': function (e, t) {
    var selectedInput = emptyPin(t);
    enterPin(t, selectedInput, 2);
    e.preventDefault();
  },
  'click #3': function (e, t) {
    var selectedInput = emptyPin(t);
    enterPin(t, selectedInput, 3);
    e.preventDefault();
  },
  'click #4': function (e, t) {
    var selectedInput = emptyPin(t);
    enterPin(t, selectedInput, 4);
    e.preventDefault();
  },
  'click #5': function (e, t) {
    var selectedInput = emptyPin(t);
    enterPin(t, selectedInput, 5);
    e.preventDefault();
  },
  'click #6': function (e, t) {
    var selectedInput = emptyPin(t);
    enterPin(t, selectedInput, 6);
    e.preventDefault();
  },
  'click #7': function (e, t) {
    var selectedInput = emptyPin(t);
    enterPin(t, selectedInput, 7);
    e.preventDefault();
  },
  'click #8': function (e, t) {
    var selectedInput = emptyPin(t);
    enterPin(t, selectedInput, 8);
    e.preventDefault();
  },
  'click #9': function (e, t) {
    var selectedInput = emptyPin(t);
    enterPin(t, selectedInput, 9);
    e.preventDefault();
  },
  'click #bkspc': function (e, t) {
    var selectedInput = emptyPin(t);
    deletePin(t, selectedInput - 1);
    e.preventDefault();
  },

  'submit #pinView': function (e, t) {
    e.preventDefault();
    var pin1 = t.find("#pin1").value;
    var pin2 = t.find("#pin2").value;
    var pin3 = t.find("#pin3").value;
    var pin4 = t.find("#pin4").value;
    var code = parseInt(pin1 + pin2 + pin3 + pin4);

    Session.set('success', null);
    Session.set('error', null);

    Meteor.call('security_code', code, function(success) {
      if (success) {
          Session.set('success', 'Safe and Sound :)');
      } else {
          Session.set('error', 'Safies released');
      }
      Router.goToPage(Router.Page.LANDING);
    });
  }
});
