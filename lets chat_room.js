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

   document.getElementById("user_name").innerHTML="Welcome "  + user_name + "!";

function addRoom()
{
     room_name=document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
           purpose:"adding room name"
     });
     localStorage.setItem("room_name" , room_name);
     window.location="kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
console.log("Room name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
//End code
     });
});
}
getData();

function redirectToRoomName(name)
{
     console.log(name);
     localStorage.setItem("room_name" , name);
     window.location="lets chat_page.html";
}
function logout()
{
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location="index.html";
}