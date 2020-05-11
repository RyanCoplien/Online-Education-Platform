import { Meteor } from 'meteor/meteor';
//import { Mongo } from 'meteor/mongo';

Meteor.startup(function() {
  // code to run on server at startup
  Meteor.methods({
  	insert_collectionStudents: function(StudentId, StudentTitle, StudentFirstName, StudentLastName, StudentPassword, StudentHighestDegree, 
  	StudentCurrentDesignation, StudentOrganization, StudentEmail, StudentPhone, StudentInterestArea, StudentOtherInfoToHighlight) {
	  console.log("in insert_collectionStudents");
	  var MongoClient = require('mongodb').MongoClient;
	  var url = "mongodb://localhost:3001";
	  MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
  		if (err) throw err;
  		console.log("Connected successfully to server");
	  	var myobj = {
	  		"StudentId": StudentId,
	  		"StudentTitle": StudentTitle,
	  		"StudentFirstName": StudentFirstName,
	  		"StudentLastName": StudentLastName,
	  		"StudentPassword": StudentPassword,
	  		"StudentHighestDegree": StudentHighestDegree,
	  		"StudentCurrentDesignation": StudentCurrentDesignation,
	  		"StudentOrganization": StudentOrganization,
	  		"StudentEmail": StudentEmail,
	  		"StudentPhone": StudentPhone,
	  		"StudentInterestArea": StudentInterestArea,
	  		"StudentOtherInfoToHighlight": StudentOtherInfoToHighlight
	  	}
	  	var dbo = db.db("myOnlineDatabase")
	  	dbo.collection("Students").insertOne(myobj, function(err, res) {
	  		if (err) throw err;
	  		console.log("1 record inserted");
	  		db.close();
	  	});
	  });
  	}
  })
});
