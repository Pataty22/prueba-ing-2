document.getElementById("btn-add").addEventListener("click", insertUser);

var usuarios;
fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(json => {
        usuarios = json.data;
        for (var i = 0; i < usuarios.length; i++){
            addUser(usuarios[i]);
        }
    });

    function addUser(user) {
        var elementoContenedor = document.createElement("div");
        elementoContenedor.className = "col-md-4";
        
        var elementoUsuario = document.createElement("div");
        elementoUsuario.className = "user";
        
        var elementoImagen = document.createElement("img");
        elementoImagen.src = user.avatar;
        elementoImagen.className = "img-fluid";
        
        var elementoNombre = document.createElement("h2");
        elementoNombre.innerText = user.first_name + " " + user.last_name;
        
        elementoUsuario.appendChild(elementoImagen);
        elementoUsuario.appendChild(elementoNombre);
        elementoContenedor.appendChild(elementoUsuario);
        
        var userData = document.getElementById("user-data");
        userData.appendChild(elementoContenedor);
    }

    function insertUser(){
        fetch('https://reqres.in/api/users?page=2')
        .then(response => response.json())
        .then(json => {
            var usuario = json.data[0];
            usuarios.push(usuario);
            addUser(usuario);
        });
    }
