var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
     apiKey: "AIzaSyB8Im6H0AB3nm8TlNNIjqGwx1VH15vA73o",
    authDomain: "logindemo-5e6d4.firebaseapp.com",
    projectId: "logindemo-5e6d4",
    storageBucket: "logindemo-5e6d4.appspot.com",
    messagingSenderId: "355638261267",
    appId: "1:355638261267:web:3f2a36f776fdf85bee71e6"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}


