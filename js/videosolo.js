// LISTA DE ELEMENTOS DE CATEGORÍA 1
var objsr = [""] 
for (var i = 0; i < 6; i++) {
    var card = "card" + i;
    if (i == 0) {

        card = {
            "iframe": "https://player.vimeo.com/video/364416497",
            "titulo": "romeo1",
            "numero": i,
            "categoria":"rock"
        }

    } else if (i == 1) {

        card = {
            "iframe": "https://player.vimeo.com/video/364416497",
            "titulo": "romeo1",
            "numero": i,
            "categoria":"rock"
        }

    } else if (i == 2) {
        card = {
            "iframe": "https://player.vimeo.com/video/364416497",
            "titulo": "romeo1",
            "numero": i,
            "categoria":"rock"
        }

    } else if (i == 3) {

        card = {
            "iframe": "https://player.vimeo.com/video/364416497",
            "titulo": "romeo1",
            "numero": i,
            "categoria":"rock"
        }
    } else if (i == 4) {

        card = {
            "iframe": "https://player.vimeo.com/video/364416497",
            "titulo": "romeo1",
            "numero": i,
            "categoria":"rock"
        }
    } else if (i == 5) {

        card = {
            "iframe": "https://player.vimeo.com/video/364416497",
            "titulo": "romeo1",
            "numero": i,
            "categoria":"rock"
        }
    }

    objsr[i] = card;
}


// CARDS clasica

var objsc = [""]
for (var x = 0; x < 6; x++) {
    var cardc = "card" + x;
    if (x == 0) {

        cardc = {

            "iframe": "https://player.vimeo.com/video/364416497",
            "titulo": "romeo2"
        }

    } else if (x == 1) {

        cardc = {

            "iframe": "https://player.vimeo.com/video/364416497",
            "titulo": "romeo2"
        }

    } else if (x == 2) {
        cardc = {

            "iframe": "https://player.vimeo.com/video/364416497",
            "titulo": "romeo2"
        }

    } else if (x == 3) {

        cardc = {

            "iframe": "https://player.vimeo.com/video/364416497",
            "titulo": "romeo2"
        }
    } else if (x == 4) {

        cardc = {

            "iframe": "https://player.vimeo.com/video/364416497",
            "titulo": "romeo2"
        }

    } else if (x == 5) {

        cardc = {

            "iframe": "https://player.vimeo.com/video/364416497",
            "titulo": "romeo"
        }

    }
    objsc[x] = cardc;
}





//  KIDS salsa

var objsal = [""]
for (var k = 0; k < 6; k++) {
    var cardsa = "card" + k;
    if (k == 0) {

        cardsa = {
            "iframe": "https://player.vimeo.com/video/364416497",
            "titulo": "romeo3"
        }

    } else if (k == 1) {

        cardsa = {
            "iframe": "https://player.vimeo.com/video/364416497",
            "titulo": "romeo3"
        }

    }
    else if (k == 2) {

        cardsa = {
            "iframe": "https://player.vimeo.com/video/364416497",
            "titulo": "romeo3"
        }

    }
    else if (k == 3) {

        cardsa = {
            "iframe": "https://player.vimeo.com/video/364416497",
            "titulo": "romeo3"
        }

    }
    else if (k == 4) {

        cardsa = {
            "iframe": "https://player.vimeo.com/video/364416497",
            "titulo": "romeo3"
        }

    }
    else if (k == 5) {

        cardsa = {
            "iframe": "https://player.vimeo.com/video/364416497",
            "titulo": "romeo3"
        }

    }

    objsal[k] = cardsa;

}


//  Categoria popular

var objpop = [""]
for (var p = 0; p < 6; p++) {
    var cardpo = "card" + p;
    if (p == 0) {

        cardpo = {
            "iframe": "https://player.vimeo.com/video/364416497",
            "titulo": "romeo3"
        }

    } else if (p == 1) {

        cardpo = {
            "iframe": "https://player.vimeo.com/video/364416497",
            "titulo": "romeo3"
        }

    }
    else if (p == 2) {

        cardpo = {
            "iframe": "https://player.vimeo.com/video/364416497",
            "titulo": "romeo3"
        }

    }
    else if (p == 3) {

        cardpo = {
            "iframe": "https://player.vimeo.com/video/364416497",
            "titulo": "romeo3"
        }

    }
    else if (p == 4) {

        cardpo = {
            "iframe": "https://player.vimeo.com/video/364416497",
            "titulo": "romeo3"
        }

    }
    else if (p == 5) {

        cardpo = {
            "iframe": "https://player.vimeo.com/video/364416497",
            "titulo": "romeo3"
        }

    }

    objpop[p] = cardpo;

}

//  Categoria popular

var objreg = [""]
for (var r = 0; r < 6; r++) {
    var cardre = "card" + r;
    if (r == 0) {

        cardre = {
            "iframe": "https://player.vimeo.com/video/364416497",
            "titulo": "romeo3"
        }

    } else if (r == 1) {

        cardre = {
            "iframe": "https://player.vimeo.com/video/364416497",
            "titulo": "romeo3"
        }

    }
    else if (r == 2) {

        cardre = {
            "iframe": "https://player.vimeo.com/video/364416497",
            "titulo": "romeo3"
        }

    }
    else if (r == 3) {

        cardre = {
            "iframe": "https://player.vimeo.com/video/364416497",
            "titulo": "romeo3"
        }

    }
    else if (r == 4) {

        cardre = {
            "iframe": "https://player.vimeo.com/video/364416497",
            "titulo": "romeo3"
        }

    }
    else if (r == 5) {

        cardre = {
            "iframe": "https://player.vimeo.com/video/364416497",
            "titulo": "romeo3"
        }

    }

    objreg[r] = cardre;

}



// lo ms visto
// clsic
// sls
// populr
// reggeto
// vlleto
// electroic
// regge
// rock
// carranga
// jazz



var video = JSON.parse(localStorage.noVideo);
console.log(objsr[video].titulo)

document.getElementById("nombreVideo") = objsr[video].titulo

