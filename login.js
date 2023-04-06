const form = document.querySelector('form');
const buttonLogin = document.querySelector("#buttonLogin")
buttonLogin.disabled = true;
let isUser = false


form.addEventListener("input", (event) => {
    if (!event.target.classList.contains('input')) return;
    buttonLogin.disabled = !form.checkValidity();

});

form.addEventListener("submit", (event) => {
    event.preventDefault()
    checkUser()
})


function checkUser() {
    const usersObject = JSON.parse(localStorage.getItem("users"))
    const emailInput = document.querySelector('#email').value
    const passwordInput = document.querySelector('#password').value
    usersObject.forEach((user) => {
        if (emailInput === user.usuario.email && passwordInput === user.usuario.contraseña) {
            user.usuario.isLogin = true
            localStorage.setItem("users", JSON.stringify(usersObject))
            redirectUser()
            isUser = true;
        }

    })

    if (!isUser) {
        document.body.querySelector("#noUser").innerText = "Usuario o contraseña incorrectas"
    }

}

function redirectUser() {
    window.location.replace("tasks.html");
}