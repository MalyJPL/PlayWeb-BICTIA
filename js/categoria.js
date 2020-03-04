/* function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
  } */

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


<h1>Cancion Prueba</h1>
<iframe class="videopp" height="100%" width="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen src="https://player.vimeo.com/video/364416497?title=false&portrait=false&byline=false&byline-form=false&background=false&video-byline=false&autopause=false&muted=true&loop=0&autoplay=0"></iframe>
<h4 class="pie"><strong>artista - canción | adicional</strong></h4>
<!--           <h6>17,206,660 vistas• 17 oct. 2014 <i onclick="myFunction(this)" class="fa fa-thumbs-up"></i> </h6> -->          
<h6>17,206,660 vistas• 17 oct. 2014 <i class="glyphicon glyphicon-thumbs-up" type=button></i></h6>
