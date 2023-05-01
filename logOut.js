const myButton = document.querySelector(".btnOut")
myButton.addEventListener("click", function() {
    const usersObject = JSON.parse(localStorage.getItem("activeUser"))
    
    if (usersObject.auth === true) {
      usersObject.auth = false ;
      localStorage.setItem("activeUser", JSON.stringify(usersObject))
      window.location.replace("index.html")
    } 
   
  });