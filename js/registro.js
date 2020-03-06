function register() {

    // Variables para obtener valores del documento.
    const user = document.getElementById('user').value;

    const name = document.getElementById('name').value;

    let email = document.getElementById('email').value;

    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const alertifyPosition = alertify.set('notifier', 'position', 'top-center');

    email = email.toLowerCase(); // Convertimos el valor de email a minúsculas.

    const password = document.getElementById('password').value;

    const checkBox = document.getElementById('checkBox');

    const emailMatch = email.match(mailFormat);

    // Objeto que contiene las variables anteriores.
    user1 = {

        user: user,

        name: name,

        email: email,

        password: password,

        date: "nacimiento",

        photo: "img/usuario1.png"

    }

    // Condición para validar si se ha ingresado los datos necesarios.
    if (user && name && email && password && checkBox.checked === true) {

        localStorage.setItem( // Guardamos el Objeto como String

            "user", JSON.stringify(user1),
        );
        window.location.assign('login.html'); // Redirigimos a la página login.html

    } else { //si no esta toda la informacion, indicar con un borde rojo donde no hay informacion

        let alerta = "solid 2px red";


        if (user === '') {

            document.getElementById('user').style.border = alerta;

        }

        if (name === '') {

            document.getElementById('name').style.border = alerta;

        }

        if (email !== emailMatch) {
            document.getElementById('email').style.border = alerta;
            alertifyPosition;
            alertify.error('Email Invalido.');
        }

        if (password === '') {

            document.getElementById('password').style.border = alerta;

        }

        if (checkBox.checked === false) {
            alertifyPosition;
            alertify.error('Acepta terminos y condiciones.');
        }
    }

}


function login() {
    const alertifyPosition = alertify.set('notifier', 'position', 'top-center');
    let userLogin = document.getElementById('userLogin').value;
    let passwordLogin = document.getElementById('passwordLogin').value;

    let localuser = JSON.parse(localStorage.user);

    let alerta = "solid 2px red";

    //si no hay informacion, alerte con el borde del input

    if (userLogin === '') {

        document.getElementById('userLogin').style.border = alerta;

    }

    if (passwordLogin === '') {

        document.getElementById('passwordLogin').style.border = alerta;

        //si hay infrmacion, validar que es el usuario y la contrase;a son crrectos
    } else if (userLogin === localuser.user && passwordLogin === localuser.password) {
        window.location.assign("home.html")
    } else { //si no son correctos, alertar que el usario 
        if (userLogin !== localuser.user) {
            alertifyPosition;
            alertify.error('Usuario no encontrado.');
        } else if (passwordLogin !== localuser.password) {
            alertifyPosition;
            alertify.error('Contraseña incorrecta.');
        }
    }
}

function buttonLogin() { //enviar a pagina login
    window.location.assign('login.html');
}

function buttonRegistro() { //enviar a pagina registro
    window.location.assign('registro.html');
}