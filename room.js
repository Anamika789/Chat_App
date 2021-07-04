 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyBgwceQfWFFubVfgU6yrrLIvcSlWA7UXWE",
      authDomain: "let-s-chat-21b1d.firebaseapp.com",
      databaseURL: "https://let-s-chat-21b1d-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-21b1d",
      storageBucket: "let-s-chat-21b1d.appspot.com",
      messagingSenderId: "644038951883",
      appId: "1:644038951883:web:20b3b7412c3bd6eb50ac4e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    
      user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "chat_page.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "chat_page.html";
    }
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }
    