function register() {

    const user = document.getElementById('user').value;

    const name = document.getElementById('name').value;

    var email = document.getElementById('email').value;

    email = email.toLowerCase();

    const password = document.getElementById('password').value;

    console.log(`${user} ${name} ${email} ${password}`);

    // Para obtener

    // JSON.parse(localStorage.getItem('user'))

    user1 = {

        user: user,

        name: name,

        email: email,

        password: password

    }

    /*

    var user = [name, surname, email, password]; // usar split

    */

    if (user && name && email && password) {



        // Para guardar el Objeto como String

        localStorage.setItem(

            "user", JSON.stringify(user1),
        );
        window.location.assign('login.html');



    } else {

        var alerta = "solid 2px red";


        if (user === '') {

            document.getElementById('user').style.border = alerta;

        }

        if (name === '') {

            document.getElementById('name').style.border = alerta;

        }

        if (email === '') {

            document.getElementById('email').style.border = alerta;

        }

        if (password === '') {

            document.getElementById('password').style.border = alerta;

        } else {

            alert("Campo desconocido");

        }



    }

}


function login() {
    let userLogin = document.getElementById('userLogin').value;
    let passwordLogin = document.getElementById('passwordLogin').value;

    let localuser = JSON.parse(localStorage.user);

    console.log(userLogin)

    if (userLogin === localuser.user && passwordLogin === localuser.password) {
        console.log(`Bienvenido! ${userLogin}`)
        window.location.assign("home.html")
    } else {

        console.log('Veo socio.')
    }
}

function buttonLogin() {
    window.location.assign('login.html');
}

function buttonRegistro() {
    window.location.assign('registro.html');
}