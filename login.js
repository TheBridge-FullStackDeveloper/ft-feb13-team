const form = document.querySelector('form');
const buttonLogin = document.querySelector("#buttonLogin")
buttonLogin.disabled = true;

form.addEventListener("input", (event) => {
    if (!event.target.classList.contains('input')) return;
    buttonLogin.disabled = !form.checkValidity();

});

form.addEventListener("submit", (event) => {
    event.preventDefault()
    checkUser()

})


function checkUser() {
    const emailInput = document.querySelector('#email').value
    const passwordInput = document.querySelector('#password').value
    fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(data => {
            const usuario = data.filter(user => emailInput === user.email && passwordInput === user.contraseña)

            if (usuario.length) {
                const activeUser = { auth: true, ...usuario[0] }
                localStorage.setItem("activeUser", JSON.stringify(activeUser))
                redirectUser(activeUser)

            } else {
                document.body.querySelector("#noUser").innerText = "Usuario o contraseña incorrectas"
            }
        })

}

function redirectUser(user) {
    if (user.auth) window.location.replace("tarjeta.html");
}