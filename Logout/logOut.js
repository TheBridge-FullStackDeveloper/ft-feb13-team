myButton.addEventListener("click", function() {
    // Recorre JSON
    usersObject.forEach(function(user) {
      // Verifica si es false y si lo es cambia a true
      if (user.usuario.isLogin === true) {
        user.usuario.isLogin = false ;
        localStorage.setItem("users", JSON.stringify(usersObject))
        window.location.replace("indext.html")
      } 
    });
  });