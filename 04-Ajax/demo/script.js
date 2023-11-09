// quiero hacer a una url, una peticion de tipo GET a /users
// voy a recibir informacion de los usuarios dentro de un array
// quiero mostrar esa informacion armando una lista de NOMBRES de usuarios

const URL_BASE = "https://jsonplaceholder.typicode.com";//URL_BASE -> constante constante(fija fija) siempre se declaran en mayusculas
//  => $.get(url, callback);
 const listaUsuarios = document.querySelector('#listaUsuarios') // => $(#listaUsuarios)[0]

$.get(`${URL_BASE}/users`, (response) => {
    //aca es donde voy a hacer el recorrido y crear en cada paso un elemento HTML que represente a cada user
    response.forEach((user) => { //user = cada elemento, pero asignandole un nombre descriptivo
        const li = document.createElement('li') //crear un elemnto de la lista para cada user
        li.innerHTML = user.name //asignamos el texto para li -> cada nombre de usuario (elemento.name)

        listaUsuarios.appendChild(li)
    });
});

//****CODIGO MEJORADO VISUALMENTE*******
// const URL_BASE = "https://jsonplaceholder.typicode.com";
// const listaUsuarios = document.querySelector("#listaUsuarios");
// const createList = (user) => {
//     const li = document.createElement("li");
//     li.innerHTML = user.name;
//     listaUsuarios.appendChild(li);
//   }
// const showUsers = (response) => {
//     response.forEach(createList);
//   }
// $.get(`${URL_BASE}/users`, showUsers);
//