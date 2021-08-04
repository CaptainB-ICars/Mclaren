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
room_name=localStorage.getItem("room name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         name=message_data['name'];
         message=message_data['message'];
         like=message_data['like'];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='likebutton' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
span_with_tag="<span> <img id='thumb' src='thumb.png' >Like: "+like+"</span> </button> <hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
      } });  }); }
getData();

function updatelike(message_id)
{
    button_id=message_id;
    likes=document.getElementById(button_id).value;
    updated_like=Number(likes)+1;  
    firebase.database().ref(room_name).child(message_id).update({
          like:updated_like
    });
}
function send()
{
      msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:username,
      message:msg,
      like:0
});

document.getElementById("msg").value="";

}

function logout()
{
      localStorage.removeItem("user's name");
      localStorage.removeItem("room name");
      window.location="index.html"
}
