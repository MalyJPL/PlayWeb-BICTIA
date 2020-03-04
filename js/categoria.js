 function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
  } 

  var video = document.getElementById('video1')

  

  var figure = $(".videopp").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
  video.addEventListener("timeupdate",function() {
    if(this.currentTime>= 10){this.pause();} 
  } , false);
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}



/*base de datos de canciones*/

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
            "category": "Los más vistos",
            "info": "lo más visto de todos los tiempos",
            "vistas": "17,206,660 vistas• 17 oct. 2014"
        }

    } else if (i == 1) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/271784656",
            "titulo": "Luis fonsi-despacito",
            "category": "Los más vistos",
            "info": "lo más visto de todos los tiempos",
            "vistas": "13,520 vistas• 21 feb. 2015"
        }

    } else if (i == 2) {
        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/310217744",
            "titulo": "Maroon-5-Girls Liie You",
            "category": "Los más vistos",
            "info": "lo más visto de todos los tiempos",
            "vistas": "9,350 vistas• 23 Ago. 2017"
        }

    } else if (i == 3) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/382771357",
            "titulo": "Justin Bieber-Yummy",
            "category": "Los más vistos",
            "info": "lo más visto de todos los tiempos",
            "vistas": "2,740 vistas• 13 Jul. 2010"
        }
    } else if (i == 4) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/314614702",
            "titulo": "Daddy yaniee-con calma",
            "category": "Los más vistos",
            "info": "lo más visto de todos los tiempos",
            "vistas": "20,120 vistas• 07 Nov. 2019"
        }
    } else if (i == 5) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/302518612",
            "titulo": "Shakira-Chantaje",
            "category": "Los más vistos",
            "info": "lo más visto de todos los tiempos",
            "vistas": "2,740 vistas• 16 Sep. 2016"
        }
        //02 CARDS clasica ------------------------------------------------
    } else if (i == 6) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/74716250",
            "titulo": "Afiham-brahms-Symphony No. 2",
            "category": "clasica",
            "info": "lo más visto de todos los tiempos",
            "vistas": "17,206,660 vistas• 17 oct. 2014"
        }

    } else if (i == 7) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/213428360",
            "titulo": "Niccolo Paganini-Caprice No.24",
            "category": "clasica",
            "info": "lo más visto de todos los tiempos",
            "vistas": "13,520 vistas• 21 feb. 2015"
        }

    } else if (i == 8) {
        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/96182376",
            "titulo": "Mozart-Violin Concerto No. 3",
            "category": "clasica",
            "info": "lo más visto de todos los tiempos",
            "vistas": "9,350 vistas• 23 Ago. 2017"
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
            "info": "lo más visto de todos los tiempos",
            "vistas": "20,120 vistas• 07 Nov. 2019"
        }

    } else if (i == 11) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/5254897",
            "titulo": "Vivaldi Summer",
            "category": "clasica",
            "info": "lo más visto de todos los tiempos",
            "vistas": "2,740 vistas• 16 Sep. 2016"
        }
    }
    // 03 CARDS salsa ------------------------------------------------
    else if (i == 12) {

        cards = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/67667065",
            "titulo": "Grupo Niche-Cali Pachanguero",
            "category": "salsa",
            "info": "La mejor salsa del mundo solo disponible en playweb",
            "vistas": "17,206,660 vistas• 17 oct. 2014"

        }

    } else if (i == 13) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/26015972",
            "titulo": "Fruco y Sus Tesos-El Caminante",
            "category": "salsa",
            "info": "La mejor salsa del mundo solo disponible en playweb",
            "vistas": "13,520 vistas• 21 feb. 2015"
        }

    }
    else if (i == 14) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/30608668",
            "titulo": "Hector Lavoe-El Cantante",
            "category": "salsa",
            "info": "La mejor salsa del mundo solo disponible en playweb",
            "vistas": "9,350 vistas• 23 Ago. 2017"
        }

    }
    else if (i == 15) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/7810176",
            "titulo": "Fania All Stars-Mi Gente",
            "category": "salsa",
            "info": "La mejor salsa del mundo solo disponible en playweb",
            "vistas": "2,740 vistas• 13 Jul. 2010"
        }

    }
    else if (i == 16) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/75023658",
            "titulo": "El Gran Combo-Echar Pa Lante",
            "category": "salsa",
            "info": "La mejor salsa del mundo solo disponible en playweb",
            "vistas": "20,120 vistas• 07 Nov. 2019"
        }

    }
    else if (i == 17) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/181207716",
            "titulo": "Grupo Niche-Sin Sentimientos",
            "category": "salsa",
            "info": "La mejor salsa del mundo solo disponible en playweb","vistas": "2,740 vistas• 16 Sep. 2016"
        }

    }
    // 04 CARDS popular ------------------------------------------------

    else if (i == 18) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/340331474",
            "titulo": "Jessy Uribe-tu veneno",
            "category": "popular",
            "info": "repítelo, la mejor música popular de todos los tiempos",
            "vistas": "17,206,660 vistas• 17 oct. 2014"
        }

    } else if (i == 19) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/128835387",
            "titulo": "Alzate Maldita-Traicion",
            "category": "popular",
            "info": "repítelo, la mejor música popular de todos los tiempos",
            "vistas": "13,520 vistas• 21 feb. 2015"
        }

    }
    else if (i == 20) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/339771712",
            "titulo": "Yeison Jimenez-Aventurero",
            "category": "popular",
            "info": "repítelo, la mejor música popular de todos los tiempos",
            "vistas": "9,350 vistas• 23 Ago. 2017"
        }

    }
    else if (i == 21) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/278039961",
            "titulo": "Paola Jara-Murio el amor",
            "category": "popular",
            "info": "repítelo, la mejor música popular de todos los tiempos",
            "vistas": "2,740 vistas• 13 Jul. 2010"
        }

    }
    else if (i == 22) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/416883",
            "titulo": "El Charrito Negro-Ojala y te Dure",
            "category": "popular",
            "info": "repítelo, la mejor música popular de todos los tiempos",
            "vistas": "20,120 vistas• 07 Nov. 2019"
        }

    }
    else if (i == 23) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/127735169",
            "titulo": "Pipe Bueno-Te hubieras ido antes",
            "category": "popular",
            "info": "repítelo, la mejor música popular de todos los tiempos",
            "vistas": "2,740 vistas• 16 Sep. 2016"
        }

    }

    //05 CARDS Reggaetón​ ------------------------------------------------
    else if (i == 24) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/374073219",
            "titulo": "Bad bunny-“Vete”",
            "category": "reggaeton",
            "info": "si te gusta, acá encuentras el regaeton que te anima",
            "vistas": "17,206,660 vistas• 17 oct. 2014"
        }

    } else if (i == 25) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/106463744",
            "titulo": "Niciy Jam-Piensas en mi",
            "category": "reggaeton",
            "info": "si te gusta, acá encuentras el regaeton que te anima",
            "vistas": "13,520 vistas• 21 feb. 2015"
        }

    }
    else if (i == 26) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/231951574",
            "titulo": "Ozuna-Una Flor",
            "category": "reggaeton",
            "info": "si te gusta, acá encuentras el regaeton que te anima",
            "vistas": "9,350 vistas• 23 Ago. 2017"
        }

    }
    else if (i == 27) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/50398702",
            "titulo": "Maluma-Obsesion",
            "category": "reggaeton",
            "info": "si te gusta, acá encuentras el regaeton que te anima",
            "vistas": "2,740 vistas• 13 Jul. 2010"
        }

    }
    else if (i == 28) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/22518288",
            "titulo": "Don Omar-Taboo",
            "category": "reggaeton",
            "info": "si te gusta, acá encuentras el regaeton que te anima",
            "vistas": "20,120 vistas• 07 Nov. 2019"
        }

    }
    else if (i == 29) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/9156949",
            "titulo": "Don Omar-Diva virtual",
            "category": "reggaeton",
            "info": "si te gusta, acá encuentras el regaeton que te anima",
            "vistas": "2,740 vistas• 16 Sep. 2016"
        }

    }

    //06 CARDS  Vallenato ------------------------------------------------

    else if (i == 30) {
        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/77467767",
            "titulo": "Binomio De Oro-Olvidala",
            "category": "vallenato",
            "info": "con sentimiento, los mejores vallenatos",
            "vistas": "17,206,660 vistas• 17 oct. 2014"
        }

    } else if (i == 31) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/62977721",
            "titulo": "Los inquietos del vallenato-quiero saber de ti",
            "category": "vallenato",
            "info": "con sentimiento, los mejores vallenatos",
            "vistas": "13,520 vistas• 21 feb. 2015"
        }

    }
    else if (i == 32) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/4204751",
            "titulo": "Jorge Celedon-Esta Vida",
            "category": "vallenato",
            "info": "con sentimiento, los mejores vallenatos",
            "vistas": "9,350 vistas• 23 Ago. 2017"
        }

    }
    else if (i == 33) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/93624636",
            "titulo": "La Aplanadora-Jorge Oñate ",
            "category": "vallenato",
            "info": "con sentimiento, los mejores vallenatos",
            "vistas": "2,740 vistas• 13 Jul. 2010"
        }

    }
    else if (i == 34) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/73329230",
            "titulo": "Binomio De Oro-Niña Bonita",
            "category": "vallenato",
            "info": "con sentimiento, los mejores vallenatos",
            "vistas": "20,120 vistas• 07 Nov. 2019"
        }

    }
    else if (i == 35) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/73203437",
            "titulo": "Binomio De Oro-Me Ilusioné",
            "category": "vallenato",
            "info": "con sentimiento, los mejores vallenatos",
            "vistas": "2,740 vistas• 16 Sep. 2016"
        }

    }

    //07 CARDS  Electronica ------------------------------------------------

    else if (i == 36) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/40333112",
            "titulo": "LMFAO-Party Roci Anthem",
            "category": "electronica",
            "info": "complace a tu DJ interior con ésta, la mejor música",
            "vistas": "17,206,660 vistas• 17 oct. 2014"
        }

    } else if (i == 37) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/166772193",
            "titulo": "Alan Walier-Faded",
            "category": "electronica",
            "info": "complace a tu DJ interior con ésta, la mejor música",
            "vistas": "13,520 vistas• 21 feb. 2015"
        }

    }
    else if (i == 38) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/213846458",
            "titulo": "Avicii–Feeling Good",
            "category": "electronica",
            "info": "complace a tu DJ interior con ésta, la mejor música",
            "vistas": "9,350 vistas• 23 Ago. 2017"
        }

    }
    else if (i == 39) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/92942193",
            "titulo": "Calvin Harris-Summer",
            "category": "electronica",
            "info": "complace a tu DJ interior con ésta, la mejor música",
            "vistas": "2,740 vistas• 13 Jul. 2010"
        }

    }
    else if (i == 40) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/5999428",
            "titulo": "Tiesto-Ultra Music Festival 2009",
            "category": "electronica",
            "info": "complace a tu DJ interior con ésta, la mejor música",
            "vistas": "20,120 vistas• 07 Nov. 2019"
        }

    }
    else if (i == 41) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/63197856",
            "titulo": "Daft Puni-Get Luciy",
            "category": "electronica",
            "info": "complace a tu DJ interior con ésta, la mejor música",
            "vistas": "2,740 vistas• 16 Sep. 2016"
        }

    }



    //08 CARDS Reggae ------------------------------------------------

    else if (i == 42) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/84545707",
            "titulo": "UB40-Red Red Wine",
            "category": "reggae",
            "info": "para relajarte, escucha con nosotros el mejor reggae",
            "vistas": "17,206,660 vistas• 17 oct. 2014"
        }

    } else if (i == 43) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/39795279",
            "titulo": "Bob Marley-No woman no cry",
            "category": "reggae",
            "info": "para relajarte, escucha con nosotros el mejor reggae",
            "vistas": "13,520 vistas• 21 feb. 2015"
        }

    }
    else if (i == 44) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/25845008",
            "titulo": "Bob Marley-Is This Love",
            "category": "reggae",
            "info": "para relajarte, escucha con nosotros el mejor reggae",
            "vistas": "9,350 vistas• 23 Ago. 2017"
        }

    }
    else if (i == 45) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/11282213",
            "titulo": "Dread Mar I-No Corras",
            "category": "reggae",
            "info": "para relajarte, escucha con nosotros el mejor reggae",
            "vistas": "2,740 vistas• 13 Jul. 2010"
        }

    }
    else if (i == 46) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/35290154",
            "titulo": "Cultura Profetica-Baja la tensión",
            "category": "reggae",
            "info": "para relajarte, escucha con nosotros el mejor reggae",
            "vistas": "20,120 vistas• 07 Nov. 2019"
        }

    }
    else if (i == 47) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/83967599",
            "titulo": "Los Cafres-Tus Ojos",
            "category": "reggae",
            "info": "para relajarte, escucha con nosotros el mejor reggae",
            "vistas": "2,740 vistas• 16 Sep. 2016"
        }

    }

    //09 CARDS Rock ------------------------------------------------

    else if (i == 48) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/42743173",
            "titulo": "Led Zeppelin-Stairway to Heaven",
            "category": "rock",
            "info": "cambia tu mundo con el mejor rock del mundo",
            "vistas": "17,206,660 vistas• 17 oct. 2014"
        }

    } else if (i == 49) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/91039686",
            "titulo": "Queen-Bohemian Rhapsody",
            "category": "rock",
            "info": "cambia tu mundo con el mejor rock del mundo",
            "vistas": "13,520 vistas• 21 feb. 2015"
        }

    }
    else if (i == 50) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/51203761",
            "titulo": "The Rolling Stones-Doom and Gloom",
            "category": "rock",
            "info": "cambia tu mundo con el mejor rock del mundo",
            "vistas": "9,350 vistas• 23 Ago. 2017"
        }

    }
    else if (i == 51) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/9058605",
            "titulo": "Pini Floyd-Taie It Baci",
            "category": "rock",
            "info": "cambia tu mundo con el mejor rock del mundo",
            "vistas": "2,740 vistas• 13 Jul. 2010"
        }

    }
    else if (i == 52) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/29928248",
            "titulo": "Deep Purple-Fireball",
            "category": "rock",
            "info": "cambia tu mundo con el mejor rock del mundo",
            "vistas": "20,120 vistas• 07 Nov. 2019"
        }

    }
    else if (i == 53) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/166581864",
            "titulo": "Jimi Hendrix-Little Wing",
            "category": "rock",
            "info": "cambia tu mundo con el mejor rock del mundo",
            "vistas": "2,740 vistas• 16 Sep. 2016"
        }

    }


    //10 CARDS Carranga ------------------------------------------------
    else if (i == 54) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/14931264",
            "titulo": "Velosa y Los Carrangueros-Colombia al Parque 2010",
            "category": "carranga",
            "info": "conoce tu tierra a través de la música carranga",
            "vistas": "17,206,660 vistas• 17 oct. 2014"
        }

    } else if (i == 55) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/184433600",
            "titulo": "Festival Cuna Carranguera",
            "category": "carranga",
            "info": "conoce tu tierra a través de la música carranga",
            "vistas": "13,520 vistas• 21 feb. 2015"
        }

    }
    else if (i == 56) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/313542910",
            "titulo": "Harawí-Los capos de la carranga",
            "category": "carranga",
            "info": "conoce tu tierra a través de la música carranga",
            "vistas": "9,350 vistas• 23 Ago. 2017"
        }

    }
    else if (i == 57) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/104301360",
            "titulo": "Carranga-colombia/tesoros escondidos",
            "category": "carranga",
            "info": "conoce tu tierra a través de la música carranga",
            "vistas": "2,740 vistas• 13 Jul. 2010"
        }

    }
    else if (i == 58) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/71164009",
            "titulo": "Dueto Primavera",
            "category": "carranga",
            "info": "conoce tu tierra a través de la música carranga",
            "vistas": "20,120 vistas• 07 Nov. 2019"
        }

    }
    else if (i == 59) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/230785269",
            "titulo": "Rumbambuquiando (el suplente)",
            "category": "carranga",
            "info": "conoce tu tierra a través de la música carranga",
            "vistas": "2,740 vistas• 16 Sep. 2016"
        }

    }

    //11 CARDS Jazz ------------------------------------------------
    else if (i == 60) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/13967790",
            "titulo": "Miles Ahead-The Music of Miles Davis",
            "category": "jazz",
            "info": "dejate seducir por el Jazz, música de todos los tiempos",
            "vistas": "17,206,660 vistas• 17 oct. 2014"
        }

    } else if (i == 61) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/5756226",
            "titulo": "Summertime-Billie Holiday",
            "category": "jazz",
            "info": "dejate seducir por el Jazz, música de todos los tiempos",
            "vistas": "13,520 vistas• 21 feb. 2015"
        }

    }
    else if (i == 62) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/5336946",
            "titulo": "What a Wonderful World Louis Armstrong",
            "category": "jazz",
            "info": "dejate seducir por el Jazz, música de todos los tiempos",
            "vistas": "9,350 vistas• 23 Ago. 2017"
        }

    }
    else if (i == 63) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/36905801",
            "titulo": "Nina Simone-The Legend",
            "category": "jazz",
            "info": "dejate seducir por el Jazz, música de todos los tiempos",
            "vistas": "2,740 vistas• 13 Jul. 2010"
        }

    }
    else if (i == 64) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/13520305",
            "titulo": "Ray Charles-America the Beautiful",
            "category": "jazz",
            "info": "dejate seducir por el Jazz, música de todos los tiempos",
            "vistas": "20,120 vistas• 07 Nov. 2019"
        }

    }
    else if (i == 65) {

        card = {
            "num": i,
            "iframe": "https://player.vimeo.com/video/32582734",
            "titulo": "Joe Henderson-Lazy Afternoon",
            "category": "jazz",
            "info": "dejate seducir por el Jazz, música de todos los tiempos",
            "vistas": "2,740 vistas• 16 Sep. 2016"
        }

    }




    objs[i] = card;
}

/*obtener el numero de video del JSON*/
/* var i = JSON.parse(localStorage.noVideo);
 */i= 2;



/*inyectar la informacion del video en la pagina */

var incluyeGeneral='' 

incluyeGeneral +=
     '<h2 class= "titulo"><strong>' + objs[i].titulo + '</strong></h2>'
    + '<iframe class="videopp" height="100%" width="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen src="' + objs[i].iframe + '">' + '</iframe>' 
    + '<h4 class="pie">'  + objs[i].category + '|' + objs[i].info + '</h4>'
    + '<h6>' + objs[i].vistas + '<i onclick="myFunction(this)" class="fa fa-thumbs-up" type=button> </i> </h6>'
   

document.getElementById("videoGrande").innerHTML = incluyeGeneral + '<br>' 
console.log(incluyeGeneral);

/* Aca empieza la inyección de codigo de los videos pequeños */

var incluyeRelacionado = '' 

incluyeRelacionado +=
     '<h3 class="pie"><strong>'  + objs[i].category +'</strong></h3>'
    + '<iframe class="videopp" frameborder="0" allow="autoplay; fullscreen" allowfullscreen src="' + objs[i].iframe + '?title=false&portrait=false&byline=false&byline-form=false&background=false&video-byline=false&autopause=false&muted=true&loop=0&autoplay=1">' + '</iframe>' 
    +'<h6 class= "titulo">' + objs[i].titulo + '</h6>'
    +'<h3 class="pie"><strong>'  + objs[i].category +'</strong></h3>'
    + '<iframe class="videopp" frameborder="0" allow="autoplay; fullscreen" allowfullscreen src="' + objs[i].iframe + '?title=false&portrait=false&byline=false&byline-form=false&background=false&video-byline=false&autopause=false&muted=true&loop=0&autoplay=1">' + '</iframe>' 
    +'<h6 class= "titulo">' + objs[i].titulo + '</h6>'

document.getElementById("videopeq").innerHTML =  '<h2>Relacionados</h2>'+ incluyeRelacionado + '<br>' 
console.log(incluyeRelacionado);



/* height="100%" width="100%" */

