const firebaseConfig = {
    apiKey: "AIzaSyD5MkE7-TqN0AmWOHJ9Ejhc6PcSrFAlkJc",
    authDomain: "loginform-f5b60.firebaseapp.com",
    projectId: "loginform-f5b60",
    storageBucket: "loginform-f5b60.appspot.com",
    messagingSenderId: "444841486565",
    appId: "1:444841486565:web:30656f873a8f577391cc0c"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const btnSignIn = document.getElementById("btnSignIn");
  const btnGoogleSignIn = document.getElementById("btnGoogleSignIn");
  const btnFacebookSignIn = document.getElementById("btnFacebookSignIn");
  const btnSignUp = document.getElementById("btnSignUp");

  btnSignIn.addEventListener('click', e => {
  	const email = email.value;
  	const password = password.value;

  	const auth = firebase.auth();

  	auth.signInWithEmailAndPassword(email, password).then(user => {
  		alert("Login Successfully!!! Welcome to BlogStrom...");
  	}).catch(err => {
  		alert(err.message);
  	});
  });

  var provider = new firebase.auth.GithubAuthProvider();
  function githubSignin() {
  	firebase.auth().signInWithPopup(provider)
  	.then(function(result) {
  		var token = result.credential.accessToken;
  		var user = result.user;

  		console.log(token);
  		console.log(user);
  	}).catch(function(error) {
  		var errorCode = error.code;
  		var errorMessage = error.message;

  		console.log(error.code);
  		console.log(error.message);
  	});
  } 

  var provider = new firebase.auth.GoogleAuthProvider();
  function googleSignin() {
  	firebase.auth().signInWithPopup(provider)
  	.then(function(result) {
  		var token = result.credential.accessToken;
  		var user = result.user;

  		console.log(token);
  		console.log(user);
  	}).catch(function(error) {
  		var errorCode = error.code;
  		var errorMessage = error.message;

  		console.log(error.code);
  		console.log(error.message);
  	});
  } 

  btnSignUp.addEventListener('click', e => {
  	const email = email.value;
  	const password = password.value;

  	const auth = firebase.auth();

  	const promise = auth.createUserWithEmailAndPassword(email, password).then(user => {
  		alert("SignUp Successfully!!! Welcome to BlogStrom...");
  	}).catch(err => {
  		alert(err.message);
  	});
  });
