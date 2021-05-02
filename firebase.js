var app_fireBase={};

(function(){
  // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
      apiKey: "AIzaSyB6hUDbDxQ7jAun5AP4wWmHc371gXfhXwo",
      authDomain: "divastra-bc212.firebaseapp.com",
      projectId: "divastra-bc212",
      storageBucket: "divastra-bc212.appspot.com",
      messagingSenderId: "601141865226",
      appId: "1:601141865226:web:21317718e4d62ecbefa8f3",
      measurementId: "G-D0GHTE5S6L"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    app_fireBase=firebase;

})()