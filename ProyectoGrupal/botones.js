// FUNTION BUTTON
let contador = 1;
let fecha = new Date();
let dias = fecha.getDate();
let mes = fecha.getMonth();
let año = fecha.getFullYear();
let horas = fecha.getHours();
let minutos = fecha.getMinutes();
let segundos = fecha.getSeconds();
let showdate = `${dias}/${mes}/${año} ${horas}:${minutos}:${segundos}`;
function save() {
  let contenedor = document.querySelector(".downSection");
  let tarjeta = document.querySelector(".card");
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
  boton1.setAttribute("id", `${contador}`);
  boton2.setAttribute("id", `${contador++}`);
  boton3.setAttribute("id", `${contador++}`);
  boton1.className = "btn";
  boton2.className = "btn";
  boton3.className = "btn";
  contador - 2;

  boton1.disabled = true;
  boton2.disabled = false;
  boton3.disabled = false;
  contador++;
}

function detalles() {
  
  document.querySelectorAll(".btn").forEach((el) => {
    let contadorClick = 1;
    el.addEventListener("click", (e) => {

      if (contadorClick == 2) {
        let tarjetaSeleccionada = e.target.parentNode.parentNode;
        tarjetaSeleccionada.className = "newTask";
        contadorClick = 1;
      }
      console.log(contadorClick);
      let tarjetaSeleccionada = e.target.parentNode.parentNode;
      tarjetaSeleccionada.className = "tarjetaDetallada";
      let fecha = document.createElement("p");
      fecha.textContent = "FECHA Y HORA: " + showdate;
      tarjetaSeleccionada.appendChild(fecha);
      contadorClick++;
    });
  });
}
