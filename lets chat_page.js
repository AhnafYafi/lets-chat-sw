var firebaseConfig = {
    apiKey: "AIzaSyArCfZmLutAGeZOBIvjS549RGpCIS-bGVE",
    authDomain: "lets-chat-88f17.firebaseapp.com",
    databaseURL: "https://lets-chat-88f17-default-rtdb.firebaseio.com",
    projectId: "lets-chat-88f17",
    storageBucket: "lets-chat-88f17.appspot.com",
    messagingSenderId: "756566232873",
    appId: "1:756566232873:web:2f69c13bf16df999863138"
  };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localstorage.getitem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
       like:0
      });
      document.getElementById("msg").value = "";
}
