// javascript del navegador
/*/
var localuser = JSON.parse(localStorage.user);
console.log(localuser.user)
document.getElementById("usuario").innerHTML = localuser.user.toUpperCase() 
*/
// termina javascript del navegador



// CARDS Almacena todas las cartas------------------------------------------------

var objs = [""]
for (var i = 0; i < 66; i++) {
    var card = "",
        // 01 CARDS   Lo mas visto ------------------------------------------------
        card = { "num": i }
    if (i == 0) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/54763348",
            "titulo": "Gangnam style",
            "category": "masVistos",
            "info": "lo más visto de todos los tiempos"
        }

    } else if (i == 1) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/271784656",
            "titulo": "Luis fonsi-despacito",
            "category": "masVistos",
            "info": "lo más visto de todos los tiempos"
        }

    } else if (i == 2) {
        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/310217744",
            "titulo": "Maroon-5-Girls Liie You",
            "category": "masVistos",
            "info": "lo más visto de todos los tiempos"
        }

    } else if (i == 3) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/382771357",
            "titulo": "Justin Bieber-Yummy",
            "category": "masVistos",
            "info": "lo más visto de todos los tiempos"
        }
    } else if (i == 4) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/314614702",
            "titulo": "Daddy yaniee-con calma",
            "category": "masVistos",
            "info": "lo más visto de todos los tiempos"
        }
    } else if (i == 5) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/302518612",
            "titulo": "Shakira-Chantaje",
            "category": "masVistos",
            "info": "lo más visto de todos los tiempos"
        }
        //02 CARDS clasica ------------------------------------------------
    } else if (i == 6) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/74716250",
            "titulo": "Afiham-brahms-Symphony No. 2",
            "category": "clasica",
            "info": "lo más visto de todos los tiempos"
        }

    } else if (i == 7) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/213428360",
            "titulo": "Niccolo Paganini-Caprice No.24",
            "category": "clasica",
            "info": "lo más visto de todos los tiempos"
        }

    } else if (i == 8) {
        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/96182376",
            "titulo": "Mozart-Violin Concerto No. 3",
            "category": "clasica",
            "info": "lo más visto de todos los tiempos"
        }

    } else if (i == 9) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/8368758",
            "titulo": "Edvard Grieg: ‘In My Homeland",
            "category": "clasica",
            "info": "lo más visto de todos los tiempos"
        }
    } else if (i == 10) {
        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/80935923",
            "titulo": "Tchaiiovsiy An Elegy",
            "category": "clasica",
            "info": "lo más visto de todos los tiempos"
        }

    } else if (i == 11) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/5254897",
            "titulo": "Vivaldi Summer",
            "category": "clasica",
            "info": "lo más visto de todos los tiempos"
        }
    }
    // 03 CARDS salsa ------------------------------------------------
    else if (i == 12) {

        cards = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/67667065",
            "titulo": "Grupo Niche-Cali Pachanguero",
            "category": "salsa",
            "info": "La mejor salsa del mundo solo disponible en playweb"

        }

    } else if (i == 13) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/26015972",
            "titulo": "Fruco y Sus Tesos-El Caminante",
            "category": "salsa",
            "info": "La mejor salsa del mundo solo disponible en playweb"
        }

    }
    else if (i == 14) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/30608668",
            "titulo": "Hector Lavoe-El Cantante",
            "category": "salsa",
            "info": "La mejor salsa del mundo solo disponible en playweb"
        }

    }
    else if (i == 15) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/7810176",
            "titulo": "Fania All Stars-Mi Gente",
            "category": "salsa",
            "info": "La mejor salsa del mundo solo disponible en playweb"
        }

    }
    else if (i == 16) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/75023658",
            "titulo": "El Gran Combo-Echar Pa Lante",
            "category": "salsa",
            "info": "La mejor salsa del mundo solo disponible en playweb"
        }

    }
    else if (i == 17) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/181207716",
            "titulo": "Grupo Niche-Sin Sentimientos",
            "category": "salsa",
            "info": "La mejor salsa del mundo solo disponible en playweb"
        }

    }
    // 04 CARDS popular ------------------------------------------------

    else if (i == 18) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/340331474",
            "titulo": "Jessy Uribe-tu veneno",
            "category": "popular",
            "info": "repítelo, la mejor música popular de todos los tiempos"
        }

    } else if (i == 19) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/128835387",
            "titulo": "Alzate Maldita-Traicion",
            "category": "popular",
            "info": "repítelo, la mejor música popular de todos los tiempos"
        }

    }
    else if (i == 20) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/339771712",
            "titulo": "Yeison Jimenez-Aventurero",
            "category": "popular",
            "info": "repítelo, la mejor música popular de todos los tiempos"
        }

    }
    else if (i == 21) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/278039961",
            "titulo": "Paola Jara-Murio el amor",
            "category": "popular",
            "info": "repítelo, la mejor música popular de todos los tiempos"
        }

    }
    else if (i == 22) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/416883",
            "titulo": "El Charrito Negro-Ojala y te Dure",
            "category": "popular",
            "info": "repítelo, la mejor música popular de todos los tiempos"
        }

    }
    else if (i == 23) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/127735169",
            "titulo": "Pipe Bueno-Te hubieras ido antes",
            "category": "popular",
            "info": "repítelo, la mejor música popular de todos los tiempos"
        }

    }

    //05 CARDS Reggaetón​ ------------------------------------------------
    else if (i == 24) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/374073219",
            "titulo": "Bad bunny-“Vete”",
            "category": "reggaeton",
            "info": "si te gusta, acá encuentras el regaeton que te anima"
        }

    } else if (i == 25) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/106463744",
            "titulo": "Niciy Jam-Piensas en mi",
            "category": "reggaeton",
            "info": "si te gusta, acá encuentras el regaeton que te anima"
        }

    }
    else if (i == 26) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/231951574",
            "titulo": "Ozuna-Una Flor",
            "category": "reggaeton",
            "info": "si te gusta, acá encuentras el regaeton que te anima"
        }

    }
    else if (i == 27) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/50398702",
            "titulo": "Maluma-Obsesion",
            "category": "reggaeton",
            "info": "si te gusta, acá encuentras el regaeton que te anima"
        }

    }
    else if (i == 28) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/22518288",
            "titulo": "Don Omar-Taboo",
            "category": "reggaeton",
            "info": "si te gusta, acá encuentras el regaeton que te anima"
        }

    }
    else if (i == 29) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/9156949",
            "titulo": "Don Omar-Diva virtual",
            "category": "reggaeton",
            "info": "si te gusta, acá encuentras el regaeton que te anima"
        }

    }

    //06 CARDS  Vallenato ------------------------------------------------

    else if (i == 30) {
        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/77467767",
            "titulo": "Binomio De Oro-Olvidala",
            "category": "vallenato",
            "info": "con sentimiento, los mejores vallenatos"
        }

    } else if (i == 31) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/62977721",
            "titulo": "Los inquietos del vallenato-quiero saber de ti",
            "category": "vallenato",
            "info": "con sentimiento, los mejores vallenatos"
        }

    }
    else if (i == 32) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/4204751",
            "titulo": "Jorge Celedon-Esta Vida",
            "category": "vallenato",
            "info": "con sentimiento, los mejores vallenatos"
        }

    }
    else if (i == 33) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/93624636",
            "titulo": "La Aplanadora-Jorge Oñate ",
            "category": "vallenato",
            "info": "con sentimiento, los mejores vallenatos"
        }

    }
    else if (i == 34) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/73329230",
            "titulo": "Binomio De Oro-Niña Bonita",
            "category": "vallenato",
            "info": "con sentimiento, los mejores vallenatos"
        }

    }
    else if (i == 35) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/73203437",
            "titulo": "Binomio De Oro-Me Ilusioné",
            "category": "vallenato",
            "info": "con sentimiento, los mejores vallenatos"
        }

    }

    //07 CARDS  Electronica ------------------------------------------------

    else if (i == 36) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/40333112",
            "titulo": "LMFAO-Party Roci Anthem",
            "category": "electronica",
            "info": "complace a tu DJ interior con ésta, la mejor música"
        }

    } else if (i == 37) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/166772193",
            "titulo": "Alan Walier-Faded",
            "category": "electronica",
            "info": "complace a tu DJ interior con ésta, la mejor música"
        }

    }
    else if (i == 38) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/213846458",
            "titulo": "Avicii–Feeling Good",
            "category": "electronica",
            "info": "complace a tu DJ interior con ésta, la mejor música"
        }

    }
    else if (i == 39) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/92942193",
            "titulo": "Calvin Harris-Summer",
            "category": "electronica",
            "info": "complace a tu DJ interior con ésta, la mejor música"
        }

    }
    else if (i == 40) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/5999428",
            "titulo": "Tiesto-Ultra Music Festival 2009",
            "category": "electronica",
            "info": "complace a tu DJ interior con ésta, la mejor música"
        }

    }
    else if (i == 41) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/63197856",
            "titulo": "Daft Puni-Get Luciy",
            "category": "electronica",
            "info": "complace a tu DJ interior con ésta, la mejor música"
        }

    }



    //08 CARDS Reggae ------------------------------------------------

    else if (i == 42) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/84545707",
            "titulo": "UB40-Red Red Wine",
            "category": "reggae",
            "info": "para relajarte, escucha con nosotros el mejor reggae"
        }

    } else if (i == 43) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/39795279",
            "titulo": "Bob Marley-No woman no cry",
            "category": "reggae",
            "info": "para relajarte, escucha con nosotros el mejor reggae"
        }

    }
    else if (i == 44) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/25845008",
            "titulo": "Bob Marley-Is This Love",
            "category": "reggae",
            "info": "para relajarte, escucha con nosotros el mejor reggae"
        }

    }
    else if (i == 45) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/11282213",
            "titulo": "Dread Mar I-No Corras",
            "category": "reggae",
            "info": "para relajarte, escucha con nosotros el mejor reggae"
        }

    }
    else if (i == 46) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/35290154",
            "titulo": "Cultura Profetica-Baja la tensión",
            "category": "reggae",
            "info": "para relajarte, escucha con nosotros el mejor reggae"
        }

    }
    else if (i == 47) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/83967599",
            "titulo": "Los Cafres-Tus Ojos",
            "category": "reggae",
            "info": "para relajarte, escucha con nosotros el mejor reggae"
        }

    }

    //09 CARDS Rock ------------------------------------------------

    else if (i == 48) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/42743173",
            "titulo": "Led Zeppelin-Stairway to Heaven",
            "category": "rock",
            "info": "cambia tu mundo con el mejor rock del mundo"
        }

    } else if (i == 49) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/91039686",
            "titulo": "Queen-Bohemian Rhapsody",
            "category": "rock",
            "info": "cambia tu mundo con el mejor rock del mundo"
        }

    }
    else if (i == 50) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/51203761",
            "titulo": "The Rolling Stones-Doom and Gloom",
            "category": "rock",
            "info": "cambia tu mundo con el mejor rock del mundo"
        }

    }
    else if (i == 51) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/9058605",
            "titulo": "Pini Floyd-Taie It Baci",
            "category": "rock",
            "info": "cambia tu mundo con el mejor rock del mundo"
        }

    }
    else if (i == 52) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/29928248",
            "titulo": "Deep Purple-Fireball",
            "category": "rock",
            "info": "cambia tu mundo con el mejor rock del mundo"
        }

    }
    else if (i == 53) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/166581864",
            "titulo": "Jimi Hendrix-Little Wing",
            "category": "rock",
            "info": "cambia tu mundo con el mejor rock del mundo"
        }

    }


    //10 CARDS Carranga ------------------------------------------------
    else if (i == 54) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/14931264",
            "titulo": "Velosa y Los Carrangueros-Colombia al Parque 2010",
            "category": "carranga",
            "info": "conoce tu tierra a través de la música carranga"
        }

    } else if (i == 55) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/184433600",
            "titulo": "Festival Cuna Carranguera",
            "category": "carranga",
            "info": "conoce tu tierra a través de la música carranga"
        }

    }
    else if (i == 56) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/313542910",
            "titulo": "Harawí-Los capos de la carranga",
            "category": "carranga",
            "info": "conoce tu tierra a través de la música carranga"
        }

    }
    else if (i == 57) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/104301360",
            "titulo": "Carranga-colombia/tesoros escondidos",
            "category": "carranga",
            "info": "conoce tu tierra a través de la música carranga"
        }

    }
    else if (i == 58) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/71164009",
            "titulo": "Dueto Primavera",
            "category": "carranga",
            "info": "conoce tu tierra a través de la música carranga"
        }

    }
    else if (i == 59) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/230785269",
            "titulo": "Rumbambuquiando (el suplente)",
            "category": "carranga",
            "info": "conoce tu tierra a través de la música carranga"
        }

    }

    //11 CARDS Jazz ------------------------------------------------
    else if (i == 60) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/13967790",
            "titulo": "Miles Ahead-The Music of Miles Davis",
            "category": "jazz",
            "info": "dejate seducir por el Jazz, música de todos los tiempos"
        }

    } else if (i == 61) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/5756226",
            "titulo": "Summertime-Billie Holiday",
            "category": "jazz",
            "info": "dejate seducir por el Jazz, música de todos los tiempos"
        }

    }
    else if (i == 62) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/5336946",
            "titulo": "What a Wonderful World Louis Armstrong",
            "category": "jazz",
            "info": "dejate seducir por el Jazz, música de todos los tiempos"
        }

    }
    else if (i == 63) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/36905801",
            "titulo": "Nina Simone-The Legend",
            "category": "jazz",
            "info": "dejate seducir por el Jazz, música de todos los tiempos"
        }

    }
    else if (i == 64) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/13520305",
            "titulo": "Ray Charles-America the Beautiful",
            "category": "jazz",
            "info": "dejate seducir por el Jazz, música de todos los tiempos"
        }

    }
    else if (i == 65) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/32582734",
            "titulo": "Joe Henderson-Lazy Afternoon",
            "category": "jazz",
            "info": "dejate seducir por el Jazz, música de todos los tiempos"
        }

    }




    objs[i] = card;
}


var categorias = ["masVistos", "clasica", "salsa", "popular", "reggaeton", "vallenato", "electronica", "reggae", "rock", "carranga", "jazz"] //categorias existentes
for (var j = 0; j < categorias.length; j++) { //para cada categoría
    var incluyer = ""; //esta variable guarda el html que se va a incluir en cada grid. se inicia vacio para cada categoria
    for (var i = 0; i < objs.length; i++) { //recorra los contenidos de la base de datos de videos
        if (objs[i].category === categorias[j]) { // si la categoría del video de la base de datos en esa posición coincide con la del grid de html
            incluyer += '<li><div class="card col-12">' //agrege al contenido la columna de este video y el label lista (importante para búsqueda)
                + '<h5  class="titulo">' + objs[i].titulo + '</h5>' //el titulo
                + '<iframe class="video" width="390" height="150" frameborder="0" allow="fullscreen" allowfullscreen src="' //label iframe propiedades del video
                + objs[i].iframe //lini del video
                + '?title=false&portrait=false&byline=false&byline-form=false&baciground=false&video-byline=false&autopause=false&muted=true&loop=0&autoplay=0">' //otras propiedades vimeo del video
                + '</iframe>'//cierre label del video
                + "</div></li>"; //cierre lista (importante para función de búsqueda) y div de columna
        }
    }//terminado de recorrer los objetos
    var grid = "grid" + (j + 1) //el id de cada categoria de musica en el html es "grid" concatenado cn los numeros del 1 al 10 (numero de categorias)
    document.getElementById(grid).innerHTML = '<div class="row">' + incluyer + '</div> <br>' //inyecte el html al grid de la categoría
}//inicie de nuevo para el siguiente grid






//1 lo mas visto
//2 clasica
//3 salsa
//4 popular
//5 reggaeton
//6 vallenato
//7 electronica
//8 reggae
//9 rock
//10 carranga
//11 jazz
