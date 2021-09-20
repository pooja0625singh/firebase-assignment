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
        // User is signed in.
        var currentUser = firebase.auth().currentUser;
        console.log(currentUser);
        console.log(currentUser.uid);
        loadData();

      } else {
    window.location = 'index.html';
    // alert("Login first");
      }
    }, function(error) {
      console.log(error);
    });
    
  };
  initApp();
  function loadData(){
    var user = firebase.auth().currentUser;
    if (user) {
        // User is signed in.
        if (user != null) {
         var uid = user.uid;  
        }
      }
    firebase.database().ref('blogs/').orderByChild('userid').equalTo(uid).on('value',(snap)=>{
      console.log(snap.val());
      var myData = snap.val();
   
      document.getElementById("blogs").innerHTML="";
      for(let[key,value] of Object.entries(myData)){
          console.log(key,value);
  
          
          document.getElementById("blogs").innerHTML+=`
          <div class="column">
          <div class="card" >
          <h3>`+value.title+`</h3>
          <img style="width: 100px;height: 100px; margin:30px" src=`+value.imageURL+`>
          <button id=`+key+` onclick="loadBlog(this.id)" name="blog">Read Blog</button>
          <button id=`+key+` onclick="deleteBlog(this.id)" name="blog">Delete Blog</button>
        </div>
      </div>
    `
  
      }
      document.getElementById("msg").innerHTML="";
      
    });
  
  }

    function deleteBlog(key){
      firebase.database().ref('blogs/' + key).remove();
      document.getElementById('read-more').innerHTML="";
      loadData();
      
  }
 
}
