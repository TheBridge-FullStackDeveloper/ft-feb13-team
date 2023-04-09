// FUNTION BUTTON
let contador = 1;
let contadorDetalles = 1;
const tarjetas = [];
let tarjeta = document.querySelector(".card");
catchUser();

function catchUser() {
  const users = JSON.parse(localStorage.getItem("users"))
  users.forEach((user) => {
    if (user.usuario.isLogin === true) {
      const username = document.querySelector("#username")
      username.innerText = user.usuario.nombre
    }
  })
}

function save() {
let botonesDetalle = [];
  let contenedor = document.querySelector(".downSection");

  let tarjeta2 = tarjeta.cloneNode(true);
  tarjeta2.className = "newTask";

  tarjeta2.id = "id" + contador;

  contenedor.appendChild(tarjeta2);

  let boton1 = tarjeta2.lastChild.previousSibling.firstChild.nextSibling;
  let boton2 =
    tarjeta2.lastChild.previousSibling.firstChild.nextSibling.nextSibling
      .nextSibling;
  let boton3 =
    tarjeta2.lastChild.previousSibling.firstChild.nextSibling.nextSibling
      .nextSibling.nextSibling.nextSibling;

  boton3.setAttribute("id", `id-${contador}`);
  boton3.setAttribute("data-posicion", `${contador}`);
  boton1.className = "btn";
  boton2.className = "btn";
  boton3.className = "btnDet";
  boton1.disabled = true;
  boton2.disabled = false;
  boton3.disabled = false;
  contador++;
  botonesDetalle.push(boton3);
  tarjetas.push(tarjeta2);
  tarjetas.forEach((el) => {

    el.addEventListener("click", (event) => {
      if (event.target.tagName === "INPUT" && event.target.value === "Detalles") {
        const id = event.target.getAttribute("id");

        let botonSeleccionado = document.querySelector(`#${id}`);
        let tarjetaSeleccionada = botonSeleccionado.parentElement.parentElement;
        if (tarjetaSeleccionada.className === `newTask`) {

          tarjetaSeleccionada.className = "tarjetaDetallada";
          let fecha = document.createElement("p");
          fecha.className = "fecha";
          fecha.textContent = showdate;
          tarjetaSeleccionada.insertBefore(
            fecha,
            tarjetaSeleccionada.lastChild.previousSibling
          );

        } else {
          let botonSeleccionado = document.querySelector(`#${id}`);
          let tarjetaSeleccionada = botonSeleccionado.parentElement.parentElement;
          tarjetaSeleccionada.className = "newTask";
          let fecha = document.querySelector(".fecha");
          fecha.parentNode.removeChild(fecha);

        }

      }
    });
  })

  addCardLocalStorage()

}

function addCardLocalStorage () {
const titleInput = document.querySelector('#titulotarjeta').value;
const descriptionInput = document.querySelector('#contenido').value

let fecha = new Date();
let dias = fecha.getDate();
let mes = fecha.getMonth();
let año = fecha.getFullYear();
let horas = fecha.getHours();
let minutos = fecha.getMinutes();
let segundos = fecha.getSeconds();
let showdate = `${dias}/${mes}/${año} ${horas}:${minutos}:${segundos}`;


  // Creo un objeto con los parametros que quiero almacenar(titulo,descripción y fecha).
let infocard = {
  titulo: titleInput,
  descripcion: descriptionInput,
  date: showdate, 
};

console.log(infocard)

// Con los datos obtenidos una vez escribe el usuario los pusheo a un array donde se van a amacenar en el localstorage.

const añadir = tarjetas.push(infocard);
const añadirfecha = tarjetas.push(showdate);

// Los datos del array los almaceno en local storge mediante el JSON.
localStorage.setItem('card', JSON.stringify(tarjetas))

}

