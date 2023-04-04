// FUNTION BUTTON
function save() {
  let fecha = new Date();
  let dias = fecha.getDate();
  let mes = fecha.getMonth();
  let año = fecha.getFullYear();
  let horas = fecha.getHours();
  let minutos = fecha.getMinutes();
  let segundos = fecha.getSeconds();
  let showdate = `${dias}/${mes}/${año} ${horas}:${minutos}:${segundos}`;
  console.log(showdate);

  let contenedor = document.querySelector(".downSection");
  let tarjeta = document.querySelector(".card");
  let tarjeta2 = tarjeta.cloneNode(true);
  tarjeta2.className = "newTask";
  let boton = tarjeta2.lastChild.previousSibling.firstChild.nextSibling;
  boton.className="boton1";
  console.log(boton);
  boton.disabled=true;

 
  contenedor.appendChild(tarjeta2);


  //   let tarjeta2=tarjeta;

  //   console.log(contenedor);
}
