// Variables para obtener valores del documento.
 var localuser = JSON.parse(localStorage.user);
 
 console.log(localuser)

 document.getElementById("usuario").innerHTML = localuser.user
 document.getElementById("correo").innerHTML = localuser.email
 document.getElementById("nombre").innerHTML = localuser.name
 document.getElementById("fecha").innerHTML = localuser.date


function modificar(){
var contenido =""

contenido =  '<p>Escriba los datos que desea actualizar</p><input class="controls" type="text" id="photo" placeholder='+localuser.photo +'>'+
'<input class="controls" type="text" id="user" placeholder='+localuser.user+'>'+
'<h5 class="tituloInicial">Correo</h5> <input class="controls" type="email" id="email" placeholder='+localuser.email+'>'
+ '<h5 class="tituloInicial">Nombre</h5> <input class="controls" type="text" id="name" placeholder='+localuser.name+'>'+
'<h5 class="tituloInicial">Fecha de nacimiento</h5><input class="controls" type="date" id="date" placeholconder='+localuser.date+'>'+
'<input class="botonsLogin" type="button" value="Guardar" onclick="guardar()">'

document.getElementById("modificar").innerHTML = contenido

console.log('usuario al modificar' + JSON.stringify(localuser))
}

function guardar(){

    var newphoto = document.getElementById("photo").value
    var newuser = document.getElementById("user").value

    var newemail = document.getElementById("email").value
    var newname = document.getElementById("name").value
    var newdate = document.getElementById("date").value

    console.log(newuser)

 
    if (newphoto !== ""){
        localuser.photo = newphoto}else{}

    if (newuser !== ""){
        localuser.user = newuser}else{}

    if (newemail !== ""){
         localuser.mail = newemail}else{}

    if (newname !== ""){
         localuser.name = newname }else{}

    if (newdate !== ""){
        localuser.date = newdate}else{}
        

        localStorage.removeItem("user");
    localStorage.setItem( // Guardamos el Objeto como String
         "user", JSON.stringify(localuser), );

         location.reload();
         

         localuser == JSON.parse(localStorage.user);
    }


/*
<input class="controls" type="date" id="date" placeholconder="Fecha de nacimiento">


  <input class="controls" type="text" id="user" placeholder="Usuario">
  <input class="controls" type="text" id="name" placeholder="Nombres y Apellidos">
  <input class="controls" type="email" id="email" placeholconder="Ingresa tu Correo">
  <input class="controls" type="password" id="password" placeholder="Ingresa tu Contraseña">
  <div class="checkboxTerminos">
      <input type="checkbox" id="checkBox">
      <span class="checkmark">Estoy de acuerdo con<a href="#"> Terminos y Condiciones.</span>
  </div>
  <input class="botonsRegistro" type="submit" value="Registrarse" onclick="register()">
  <input class="botonsLogin" type="button" value="Ya tengo una cuenta" onclick="buttonLogin()">
</div> */