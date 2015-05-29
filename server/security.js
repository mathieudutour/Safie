//Meteor.methods({
//	joinParty : function(partyName) {
//		check(partyName, String);
//		var party = Parties.findOne({ name: partyName});
//
//		if(party) {
//			return party._id;
//		} else {
//          var up = new Meteor.Error("joinPartyError", "No party found");
//			throw up;
//		}
//	},
//});
