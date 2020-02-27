var objsr = [""]
for (var i = 0; i < 6; i++) {
    var card = "card" + i;
    if (i == 0) {

        card = {
            "iframe": "https://player.vimeo.com/video/364416497",
            "titulo": "romeo1"
        }

    } else if (i == 1) {

        card = {
            "iframe": "https://player.vimeo.com/video/364416497",
            "titulo": "romeo1"
        }

    } else if (i == 2) {
        card = {
            "iframe": "https://player.vimeo.com/video/364416497",
            "titulo": "romeo1"
        }

    } else if (i == 3) {

        card = {
            "iframe": "https://player.vimeo.com/video/364416497",
            "titulo": "romeo1"
        }
    } else if (i == 4) {

        card = {
            "iframe": "https://player.vimeo.com/video/364416497",
            "titulo": "romeo1"
        }
    } else if (i == 5) {

        card = {
            "iframe": "https://player.vimeo.com/video/364416497",
            "titulo": "romeo1"
        }
    }

    objsr[i] = card;
}

var incluyer = [""];
for (var i = 0; i < 6; i++) {
    var titulo = "titulo" + i;
    incluyer += '<div class="card col-4">'
        + '<h3 class="categoria">' + objsr[i].titulo + '</h3>'
        + '<iframe class="video1" width="390" height="250" frameborder="0" allow="autoplay; fullscreen" allowfullscreen src="' + objsr[i].iframe + '">' + '</iframe>'
        + '<p class="pie de pagina">' + "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, autem dolore excepturi eius cupiditate ipsa repudiandae, qui distinctio eligendi, voluptate earum! Dignissimos sapiente cupiditate nisi recusandae eaque nobis aspernatur esse." + '</p>'
        + "</div>";
}
//if marca.i oj=rock  pr que solo escoj por ctegori
document.getElementById("grid").innerHTML = '<div class="row">' + incluyer + '</div> <br>'


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




var incluyec = [""];
for (var x = 0; x < 6; x++) {
    var titulo = "titulo" + x;

    incluyec += '<div class="card col-4">'
        + '<h3 class="titulo">' + objsc[x].titulo + '</h3>'
        + '<iframe class="video1" width="390" height="250" frameborder="5" allow="autoplay; fullscreen" allowfullscreen src="' + objsc[x].iframe + '?title=false?portrait=false">' + '</iframe>'
        + '<p class="pie de pagina">' + "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, autem dolore excepturi eius cupiditate ipsa repudiandae, qui distinctio eligendi, voluptate earum! Dignissimos sapiente cupiditate nisi recusandae eaque nobis aspernatur esse." + '</p>'
        + "</div>";
}


document.getElementById("grid2").innerHTML = '<div class="row">' + incluyec + '</div> <br>'

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


var incluyesal = [""];
for (var k = 0; k < 6; k++) {
    var titulo = "titulo" + k;
    incluyesal += '<div class="card col-4">'
        + '<h3 class="marca" >' + objsal[k].titulo + '</h3>'
        + '<iframe class="video1" width="390" height="150" frameborder="0" allow="autoplay; fullscreen" allowfullscreen src="' + objsal[k].iframe + '?title=false">' + '</iframe>'
        + '<p class="pie de pagina">' + "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, autem dolore excepturi eius cupiditate ipsa repudiandae, qui distinctio eligendi, voluptate earum! Dignissimos sapiente cupiditate nisi recusandae eaque nobis aspernatur esse." + '</p>'
        + "</div>";
}

document.getElementById("grid3").innerHTML = '<div class="row">' + incluyesal + '</div>'




