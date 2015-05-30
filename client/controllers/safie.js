Template.settings.events({
'click #submitSettings': function(e){
e.preventDefault();
}
});

Template.history.events({
'click #imSafe': function(e){
e.preventDefault();
},
});

// Used to check what input field is empty
emptyPin = function() {
  if(document.getElementById("pin1").value === "")
      return 0;
    else if(document.getElementById("pin2").value === "")
        return 1;
    else if(document.getElementById("pin3").value === "")
        return 2;
    else if(document.getElementById("pin4").value === "")
        return 3;
    else
        return null;
}

enterPin = function(pinIndex, pinValue){
    console.log("Pin: "+pinValue);
    if(pinIndex === 0)
        document.getElementById("pin1").value = pinValue;
    if(pinIndex === 1)
    document.getElementById("pin2").value = pinValue;
    if(pinIndex === 2)
    document.getElementById("pin3").value = pinValue;
    if(pinIndex === 3)
    document.getElementById("pin4").value = pinValue;
    if(pinIndex === null){
        var pin1 = document.getElementById("pin1").value;
        var pin2 = document.getElementById("pin2").value;
        var pin3 = document.getElementById("pin3").value;
        var pin4 = document.getElementById("pin4").value;
        console.log("Full pin: "+pin1+pin2+pin3+pin4);

    }
}

deletePin = function(pinIndex){
 if(pinIndex === 0)
        document.getElementById("pin1").value = "";
    if(pinIndex === 1)
    document.getElementById("pin2").value = "";
    if(pinIndex === 2)
    document.getElementById("pin3").value = "";
    if(pinIndex === 3)
    document.getElementById("pin4").value = "";
}

Template.pincode.events({
'click #1': function(e){

    var selectedInput = emptyPin();
   enterPin(selectedInput, 1);
    e.preventDefault();
},
'click #2': function(e){
    var selectedInput = self.emptyPin();
    enterPin(selectedInput, 2);
    e.preventDefault();
},
'click #3': function(e){
    var selectedInput = self.emptyPin();
    enterPin(selectedInput, 3);
    e.preventDefault();
},
'click #4': function(e){
    var selectedInput = self.emptyPin();
    enterPin(selectedInput, 4);
    e.preventDefault();
},
'click #5': function(e){
    var selectedInput = self.emptyPin();
    enterPin(selectedInput, 5);
    e.preventDefault();
},
'click #6': function(e){
    var selectedInput = self.emptyPin();
    enterPin(selectedInput, 6);
    e.preventDefault();
},
'click #7': function(e){
    var selectedInput = self.emptyPin();
    enterPin(selectedInput, 7);
    e.preventDefault();
},
'click #8': function(e){
    var selectedInput = self.emptyPin();
    enterPin(selectedInput, 8);
    e.preventDefault();
},
'click #9': function(e){
    var selectedInput = self.emptyPin();
    enterPin(selectedInput, 9);
    e.preventDefault();
},
    'click #bkspc': function(e){
    var selectedInput = self.emptyPin();
    deletePin(selectedInput-1);
    e.preventDefault();
    }
});
