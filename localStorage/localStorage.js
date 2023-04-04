addEventListener("load", (event) => {
    fetch('usuarios.json')
    .then(response => response.json())
    .then(data => {
        const jsonUsers = JSON.stringify(data)
        localStorage.setItem("users" , jsonUsers)
    })
    .catch(error => console.log(error));
});
