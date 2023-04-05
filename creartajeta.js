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
    console.log(tarjeta2);
    
}

localStorage.getItem('Titulo')