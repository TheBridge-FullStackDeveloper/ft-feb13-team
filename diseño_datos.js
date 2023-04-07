// Creo función save para generar la fecha y la hora.
function save() {
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
    // let tarjeta2 = tarjeta.cloneNode(true);

// Una vez seleccionada la tarjeta atrapo el valor del Titulo y de la Descripción.
    const titleInput = document.querySelector('#titulotarjeta').value;
    const descriptionInput = document.querySelector('#contenido').value

// Creo un objeto con los parametros que quiero almacenar(titulo,descripción y fecha).
    let infocard = {
        titulo: titleInput,
        descripcion: descriptionInput,
        date: showdate, 
    };

    
// Con los datos obtenidos una vez escribe el usuario los pusheo a un array donde se van a amacenar en el localstorage.
    const añadir = tarjetas.push(infocard);
    const añadirfecha = tarjetas.push(showdate);

// Los datos del array los almaceno en local storge mediante el JSON.
    localStorage.setItem('card', JSON.stringify(tarjetas))
}

const tarjetas = [];