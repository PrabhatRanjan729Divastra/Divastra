async function signup(e){
					e.preventDefault();
					const email=document.querySelector("#signUpEmail");
					const password=document.querySelector("#signUpPassword");
					
					try{
						const result = await firebase.auth().createUserWithEmailAndPassword(email.value, password.value);
						console.log(result);
					}
					catch(error){
						console.log(error);
					}
}

async function login(e){
					e.preventDefault();
					const email=document.querySelector("#logInEmail");
					const password=document.querySelector("#logInPassword");
					
					try{
						const result = await firebase.auth().signInWithEmailAndPassword(email.value, password.value);
						console.log(result);
						alert("logged in");
					}
					catch(error){
						console.log(error);
						alert(error.message);
					}
}

function logout(){
					firebase.auth().signOut();
}

firebase.auth().onAuthStateChanged((user) => {
				  if (user) {
				    // User is signed in, see docs for a list of available properties
				    // https://firebase.google.com/docs/reference/js/firebase.User
				    console.log(user[0]);
				   alert(user);
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