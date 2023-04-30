const myButton = document.querySelector(".btnOut")
myButton.addEventListener("click", function() {
    // Recorre JSON
    const usersObject = JSON.parse(localStorage.getItem("users"))
    usersObject.forEach((user) => {
      // Verifica si es false y si lo es cambia a true
      if (user.usuario.isLogin === true) {
        user.usuario.isLogin = false ;
        localStorage.setItem("users", JSON.stringify(usersObject))
        window.location.replace("index.html")
      } 
    });
  });