function logout(){
					firebase.auth().signOut();
}

firebase.auth().onAuthStateChanged((user) => {
				  if (user) {
				    // User is signed in, see docs for a list of available properties
				    // https://firebase.google.com/docs/reference/js/firebase.User
				    console.log(user);
				    // ...
				  } else {
				    alert("Signed Out");
				  }
});


async function logInWithGoogle(){
	try{
		var provider = new firebase.auth.GoogleAuthProvider();
		const result = await firebase.auth()
   		 .signInWithPopup(provider)
	}
	catch(error){
		alert(error.message);
	}
  
}