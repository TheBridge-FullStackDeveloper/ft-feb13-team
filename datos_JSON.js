// Selecciono del DOM la tarjeta
let tarjeta = document.querySelector(".card");


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


const tarjetas = [];