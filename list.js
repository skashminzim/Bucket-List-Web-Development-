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




 /*firebase.auth().onAuthStateChanged(function(user) {
   if (user) {
     // User is signed in.


     var user = firebase.auth().currentUser;


     if(user != null){

       var email_id = user.email;

     }

   } else {

     document.location.href="./login.html";
     window.alert("meh");

   }
 });*/



 function logout(){
   firebase.auth().signOut();
   document.location.href="./login.html";
 }
