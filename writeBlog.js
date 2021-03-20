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


document.getElementById('commentForm').addEventListener('submit',submitForm);

  var msgref=firebase.database().ref('upload');//creats a table in the database named messages

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      //document.location.href="./index.html";
      //window.alert("hi again");


      var user = firebase.auth().currentUser;
    } //else {
      // No user is signed in.
    //  window.alert("NOPW");
     // document.location.href="./log.html"
    //}
  });


  function getInputVal(id)
  {
    return document.getElementById(id).value; //returning the value of designated id
  }




  function submitForm()
  {
    //e.preventDefault();//prevents html from doing any default work upon getting an event

    var name= getInputVal('name');
    var email= getInputVal('email');
    var title= getInputVal('title');
    var blog= getInputVal('comment');

    saveMessage(name,email,title,blog);

  /*  document.querySelector('.alert').style.display='block';

    setTimeout(function(){
      document.querySelector('.alert').style.display='none';
    },3000);*/

    document.getElementById('commentForm').reset();

    setTimeout(function(){
      document.location.href="./list.html";
    },1000);

  }




  function saveMessage(name,email,title,blog)
  {
    var newmsgref=msgref.push();

    newmsgref.set({
      name: name,
      email:email,
      blog:blog,
      title:title,
    });
  }
