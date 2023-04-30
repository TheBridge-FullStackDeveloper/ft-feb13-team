const tarjetas = [];
let contador = 1;
// Creo función save para generar la fecha y la hora.
function save() {
  console.log("entra");
  let fecha = new Date();
  let dias = fecha.getDate();
  let mes = fecha.getMonth();
  let año = fecha.getFullYear();
  let horas = fecha.getHours();
  let minutos = fecha.getMinutes();
  let segundos = fecha.getSeconds();

  // En la variable showdate almaceno los datos de la función save mediante el string template.
  let showdate = `${dias}/${mes}/${año} ${horas}:${minutos}:${segundos}`;

  // Selecciono del DOM la tarjeta
  let tarjeta = document.querySelector(".card");
  let inputGuardar = document.querySelector(".guardar");
  let inputEditar = document.querySelector(".editar");
  inputEditar.setAttribute("id", `editar-${contador}`);
  let inputDetalles = document.querySelector(".detalles");
  inputDetalles.setAttribute("id", `detalle-${contador}`);

  // Una vez seleccionada la tarjeta atrapo el valor del Titulo y de la Descripción.
  const titleInput = document.querySelector("#titulotarjeta").value;
  const descriptionInput = document.querySelector("#contenido").value;

  // Creo un objeto con los parametros que quiero almacenar(titulo,descripción y fecha).
  let infocard = {
    titulo: titleInput,
    descripcion: descriptionInput,
    date: showdate,
  };

  // Con los datos obtenidos una vez escribe el usuario los pusheo a un array donde se van a amacenar en el localstorage.
  tarjetas.push(infocard);
  // const añadirfecha = tarjetas.push(showdate);

  // Los datos del array los almaceno en local storge mediante el JSON.
  localStorage.setItem("card", JSON.stringify(tarjetas));

  // ____________EMPIEZA CLON________________________
  //añadir tarjeta a downSection
  let downSec = document.querySelector(".downSection");

  //clonamos tarjeta
  let tarjetaModelo = document.querySelector(".card");
  let clonTarjeta = tarjetaModelo.cloneNode(true);

  let boxTitle = clonTarjeta.childNodes[1].children[0];
  let boxDescription = clonTarjeta.childNodes[5].children[0];

  boxTitle.readOnly = true;
  boxDescription.readOnly = true;

  //ATRAPAMOS INPUT BOTONES
  let inputSave = clonTarjeta.childNodes[7].childNodes[1];
  inputSave.removeAttribute("onclick");
  let inputEdit = clonTarjeta.childNodes[7].childNodes[3];
  let inputDetalle = clonTarjeta.childNodes[7].childNodes[5];

  inputSave.disabled = true;
  inputEdit.disabled = false;
  inputDetalle.disabled = false;

  inputSave.addEventListener("click", update);
  inputDetalle.addEventListener("click", details);


  // evento EDITAR
  inputEdit.addEventListener("click", (event) => {
    console.log("entrando add-listener");
    let textDes =
      event.target.parentNode.previousSibling.previousSibling.firstChild
        .nextSibling;
    boxTitle.readOnly = false;
    textDes.readOnly = false;
    inputEdit.disabled = true;
    inputSave.disabled = false;
  });

  //pasamos tarjeta a downSection
  downSec.append(clonTarjeta);
  contador++;


  //funcion manejadora btn guardar de tarjeta clonada
  function update() {
    inputSave.disabled = true;
    inputEdit.disabled = false;
    boxTitle.readOnly = true;
    boxDescription.readOnly = true;
  }
  
  //funcion manejadora btn detalles de tarjeta clonada
  function details() {
    //miramos clase de la tarjeta y la modificamos segun su valor inicial
    if (clonTarjeta.className == "card") {
      clonTarjeta.className = "tarjetaDetallada";
      let usuarios = JSON.parse(localStorage.getItem("users"));
      //buscamos el usuario logeado
      let usuarioConectado = usuarios.filter(
        (el) => el.usuario.isLogin === true
      );
      let creador = document.createElement("p");
      creador.style.color = "black";
      creador.textContent = "Creado por: " + usuarioConectado[0].usuario.nombre;

      let data = document.createElement("p");
      data.textContent = showdate;
      data.style.color = "black";

      //añadimos detalles a la tarjeta
      clonTarjeta.append(creador);
      clonTarjeta.append(data);


    } else {
      clonTarjeta.removeChild(clonTarjeta.childNodes[9]);
      clonTarjeta.removeChild(clonTarjeta.childNodes[9]);
      clonTarjeta.classList.remove("tarjetaDetallada");
      clonTarjeta.className = "card";
    }

  }
}
