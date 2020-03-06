// Variables para obtener valores del documento.
 var localuser = JSON.parse(localStorage.user);
 
 console.log(localuser)

 document.getElementById("usuario").innerHTML = localuser.user
 document.getElementById("correo").innerHTML = localuser.email
 document.getElementById("nombre").innerHTML = localuser.name
 document.getElementById("fecha").innerHTML = localuser.date


function modificar(){
var contenido =""
//se inyecta un codigo con inputs para cambiar los datos del usuario. el placeholder de cada input tiene la
//datos almacenados 
contenido =  '<p>Escriba los datos que desea actualizar</p>' //titulo
+'<input class="controls" type="text" id="photo" placeholder=' //input de foto
+localuser.photo +'>' // placeholder de dato previamente almacenado de foto
+'<input class="controls" type="text" id="user" placeholder=' //input de usuario
+localuser.user+'>' // placeholder de dato previamente almacenado de user
+'<h5 class="tituloInicial">Correo</h5> <input class="controls" type="email" id="email" placeholder=' //input de email
+localuser.email+'>' // placeholder de dato previamente almacenado de email
+ '<h5 class="tituloInicial">Nombre</h5> <input class="controls" type="text" id="name" placeholder=' //input de nombre
+localuser.name+'>'+ // placeholder de dato previamente almacenado de nombre
'<h5 class="tituloInicial">Fecha de nacimiento</h5><input class="controls" type="date" id="date" placeholconder=' //fecha nacimiento
+localuser.date+'>'+ // placeholder de dato previamente almacenado de fecha de nacimiento
'<input class="botonsLogin" type="button" value="Guardar" onclick="guardar()">' //boton que activa funcion guardar

document.getElementById("modificar").innerHTML = contenido

console.log('usuario al modificar' + JSON.stringify(localuser))
}

function guardar(){
//almacena en variables los datos nuevos introducidos por el usuario
    var newphoto = document.getElementById("photo").value
    var newuser = document.getElementById("user").value
    var newemail = document.getElementById("email").value
    var newname = document.getElementById("name").value
    var newdate = document.getElementById("date").value
 
    //revisa si los datos nuevos estan vacios. Si no lo estan, asigna a localuser el valor nuevo
    if (newphoto !== ""){  localuser.photo = newphoto}
    if (newuser !== ""){   localuser.user = newuser}
    if (newemail !== ""){  localuser.mail = newemail}
    if (newname !== ""){ localuser.name = newname }
    if (newdate !== ""){  localuser.date = newdate}
        
        localStorage.removeItem("user"); //borramos los datos anteriores en el localStore del usuario

    localStorage.setItem( // Guardamos el Objeto como String en local storage
         "user", JSON.stringify(localuser), );

         location.reload(); //recarga para regresar al perfil lleno

         localuser = JSON.parse(localStorage.user); //actualizamos usuario en este javascript
    }

