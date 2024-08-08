
//ADICIONE SEUS LINKS FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyBdfWuIcSTJkXX4n3BUejblDx6NvDgO1Xo",
    authDomain: "kwitter-87c82.firebaseapp.com",
    projectId: "kwitter-87c82",
    storageBucket: "kwitter-87c82.appspot.com",
    messagingSenderId: "798277546779",
    appId: "1:798277546779:web:939673460f8b1d9384d9be"
  };

firebase.initializeApp(firebaseConfig);

function addUser()
{
  userName = document.getElementById("userName").value;
  firebase.database().ref("/").child(userName).update({
    purpose : "adicionar usuário"
  });  
}






