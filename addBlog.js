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

initApp = function() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var currentUser = firebase.auth().currentUser;
      console.log(currentUser);
      console.log(currentUser.uid);
      console.log(currentUser.displayName);
      console.log(currentUser.email);

    } else {
  window.location = 'blogHomePage.html';
    }
  }, function(error) {
    console.log(error);
  });
    
  };
  initApp();
  function upload(){

    var user = firebase.auth().currentUser;
    if (user) {
      if (user != null) {
        var currentName = user.displayName;
        var email = user.email;
        var name = user.displayName;
        var uid = user.uid;  
        console.log(currentName);
          console.log(email);
          console.log(uid);
        }
      }


  
  var image = document.getElementById('image').files[0];

  var post = document.getElementById('post').value;

  var imageName = image.name + new Date().getTime();

  var storageRef = firebase.storage().ref('images/' + imageName);

  var uploadTask = storageRef.put(image);

  var title=document.getElementById('title').value;

  if( name == null){
    name=email;
  }
  
  uploadTask.on('state_changed', function(snapshot){
    var progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
    console.log("Upload is" + progress + "done");
    if(progress==0){
    document.getElementById("message").innerHTML=`<p >Uploading </p>`
    }
    if(progress==100){
      document.getElementById("message").innerHTML=`<p >Uploading </p>`

    }
      }, function(error){
            console.log(error.message);
      }, function(){
          uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
          firebase.database().ref('blogs/').push().set({      
            userid: uid,
            author: currentName,
            title: title,
            text: post,
            imageURL: downloadURL,
            name:name             
      }, function(error){
            if(error){
                alert("Error while uploading");
            }
            else{
                alert("Successfully uploaded");
                document.getElementById('post-form').reset();
            
            }
});
  
    });
  });
  
  
  }

  initApp = function() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        var currentUser = firebase.auth().currentUser;
        console.log(currentUser);
        console.log(currentUser.uid);

      } else {
    window.location = 'loginForm.html';
      }
    }, function(error) {
      console.log(error);
    });
    
  };

function uploadBlog(){
  if(document.getElementById("title").value == '' || document.getElementById("image").value == ''){
    document.getElementById("message").innerHTML=`<p style="color:red">Enter all feilds</p>`
  }
  else{
    console.log("upload")
    upload();
  }
}