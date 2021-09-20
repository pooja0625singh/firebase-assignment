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

firebase.database().ref('blogHomePage/').on('value',(x)=>{
    console.log(x.val());
    var myData = x.val();
    document.getElementById("blogs").innerHTML="";
    
    for(let[key,value] of Object.entries(myData)){
        console.log(key,value);

        
        document.getElementById("blogs").innerHTML += 
            `<div>
            <div class="card" >
            <h3>`+value.title+`</h3>
            <img style="width: 100px;height: 100px; margin:30px" src=`+value.imageURL+`>
            
            <button id=`+ key +` onclick="loadBlog(this.id)" name="blog">Read Blog</button>
            </div>
            </div>`

    }
      
  });

  function logOut(){
    alert("Successfully Logged Out!!! Thank you for expressing your thoughts...")
  }