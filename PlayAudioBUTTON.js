document.addEventListener('DOMContentLoaded', function () {
 
  var imagem = document.getElementById('image');
  var audio = document.getElementById('audio');


  imagem.addEventListener('click', function () {

      if (audio.paused) {
          audio.play();
      } else {
          audio.pause();
      }
  });
});
