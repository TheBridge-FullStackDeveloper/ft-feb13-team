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


}
