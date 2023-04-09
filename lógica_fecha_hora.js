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
}