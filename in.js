var firebaseConfig = {
    apiKey: "AIzaSyBUHiTlvDVdEyHTQbDN1yKAvrQf2ZW259s",
    authDomain: "csepro-711f1.firebaseapp.com",
    databaseURL: "https://csepro-711f1.firebaseio.com",
    projectId: "csepro-711f1",
    storageBucket: "",
    messagingSenderId: "1094234809007",
    appId: "1:1094234809007:web:93e04658c7fa5135092a5a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


var messagesRef = firebase.database().ref().child("messages");
	messagesRef.on("child_added", snap=> {
		///alert(snap.val());
		var name=snap.child("name").val();
		var email=snap.child("email").val();
		var phone=snap.child("phone").val();
		var company=snap.child("company").val();
		var message=snap.child("message").val();


		$("#table_body").append("<tr><td>" + name + "</td><td>" + email+"</td><td>"+phone+"</td><td>"+company+"</td><td>"+message+"</td></tr>");
	});
