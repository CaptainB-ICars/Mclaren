var firebaseConfig = {
      apiKey: "AIzaSyDBFSPmlPDNUX5ryLeoe_9E16oRcvAw4T0",
      authDomain: "mclaren-7ee97.firebaseapp.com",
      databaseURL: "https://mclaren-7ee97-default-rtdb.firebaseio.com",
      projectId: "mclaren-7ee97",
      storageBucket: "mclaren-7ee97.appspot.com",
      messagingSenderId: "579697820773",
      appId: "1:579697820773:web:b5bef952e9e13948fbf28c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

username=localStorage.getItem("user's name");
document.getElementById("user_name").innerHTML="Welcome "+username+"!";

function addroom()
{
      roomname=document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"This is the roomname(but something will happen!)"
      });
      localStorage.setItem("room name",roomname);
      window.location="kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='ReDirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";     
       document.getElementById("output").innerHTML+=row;
      });});}
getData();

function ReDirectToRoomName(name)
{
      localStorage.setItem("room name",name);
      window.location="kwitter_page.html";
    
}


function logout()
{
      localStorage.removeItem("user's name");
      localStorage.removeItem("room name");
      window.location="index.html"
}




