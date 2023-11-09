// Utiliza el evento click en un boton para hacer que al hacer click en el mismo aparezca en el DOM
// una lista con todos los amigos que el servidor nos devolvera al hacer un GET a la ruta
// http://localhost:5000/amigos

const { query } = require("express");

const URL_BASE = "http://localhost:5000";
const lista = document.querySelector("#lista");
const button = querySelector('#boton')//traer el id boton

const viewList = () => {
    lista.innerHTML='' //limpiamos la lista cada vez que inicia el boton
   $.get(`${URL_BASE}/amigos`, (res) => {
    
   });

}
button.addEventListener(lista,viewList)//cuando se haga click en el boton, debe mostrar los amigos
