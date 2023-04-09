// FUNTION BUTTON
let contador = 1;
let contadorDetalles = 1;
let botonesDetalle = [];
let tarjetas = [];
let contadorClick = 0;
let fecha = new Date();
let dias = fecha.getDate();
let mes = fecha.getMonth();
let año = fecha.getFullYear();
let horas = fecha.getHours();
let minutos = fecha.getMinutes();
let segundos = fecha.getSeconds();
let showdate = `${dias}/${mes}/${año} ${horas}:${minutos}:${segundos}`;
let tarjeta = document.querySelector(".card");

function save() {
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
  tarjetas.forEach((el)=>{
  
    el.addEventListener("click", (event) => {
      if (event.target.tagName === "INPUT" && event.target.value === "Detalles") {
        const id = event.target.getAttribute("id");
         console.log("Se ha clickeado el id " + id);

         let botonSeleccionado = document.querySelector(`#${id}`);
         let tarjetaSeleccionada = botonSeleccionado.parentElement.parentElement;
          if (tarjetaSeleccionada.className === `newTask`) {
        console.log("esta if");
        tarjetaSeleccionada.className = "tarjetaDetallada";
        let fecha = document.createElement("p");
        fecha.className="fecha";
        fecha.textContent = showdate;
        tarjetaSeleccionada.insertBefore(
          fecha,
          tarjetaSeleccionada.lastChild.previousSibling
        );

      } else {
        console.log("esta else");
        let botonSeleccionado = document.querySelector(`#${id}`);
        let tarjetaSeleccionada = botonSeleccionado.parentElement.parentElement;
        tarjetaSeleccionada.className="newTask";
        let fecha = document.querySelector(".fecha");
        fecha.parentNode.removeChild(fecha);

      }
         
      }
    });
   })
}

  

function detalles() {
  console.log("ENTRO detalles");

  //________//

  // botonesDetalle.forEach((el) => {
  //   el.addEventListener("click", (event)  =>{

  //     const id = event.target.getAttribute("id");
  //     console.log("Se ha clickeado el id " + id);
  //     let botonSeleccionado = document.querySelector(`#${id}`);
  //     let tarjetaSeleccionada = botonSeleccionado.parentElement.parentElement;

  //     if (tarjetaSeleccionada.className === `newTask`) {
  //       console.log("esta if");
  //       tarjetaSeleccionada.className = "tarjetaDetallada";
  //       let fecha = document.createElement("p");
  //       fecha.textContent = showdate;
  //       tarjetaSeleccionada.insertBefore(
  //         fecha,
  //         tarjetaSeleccionada.lastChild.previousSibling
  //       );

  //     } else {
  //       console.log("esta else");

  //       tarjetaSeleccionada.className = `newTask`;
  //     }
  //   });

  // });
  console.log("----------------------------------------------------");
}
