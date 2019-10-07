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



 firebase.auth().onAuthStateChanged(function(user) {
   if (user) {
     // User is signed in.

     //document.getElementById("user_div").style.display = "block";
     //document.getElementById("login_div").style.display = "none";

     var user = firebase.auth().currentUser;

     document.location.href="./list.html";

     window.alert("Welcome to food for All");

     if(user != null){

       var email_id = user.email;
      // document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

     }

   } else {
     // No user is signed in.

     //document.getElementById("user_div").style.display = "none";
     //document.getElementById("login_div").style.display = "block";
     //document.location.href="./log.html";

   }
 });







 function login(){

  var userEmail = document.getElementById("email").value;
  var userPass = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}



function logout(){
  firebase.auth().signOut();
  document.location.href="./login.html";
}
