function save() {
    let fecha = new Date();
    let dias = fecha.getDate();
    let mes = fecha.getMonth();
    let año = fecha.getFullYear();
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();


    let showdate = `${dias}/${mes}/${año} ${horas}:${minutos}:${segundos}`;

    let tarjeta = document.querySelector(".card");
    let tarjeta2 = tarjeta.cloneNode(true);

    const titleInput = document.querySelector('#titulotarjeta').value;
    const descriptionInput = document.querySelector('#contenido').value

    let infocard = {
        titulo: titleInput,
        descripcion: descriptionInput,
    };

    const tarjetas = [];

    const añadir = tarjetas.push(infocard);
    
    localStorage.setItem('card', JSON.stringify(tarjetas))





}

