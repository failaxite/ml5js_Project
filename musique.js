const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;

let audioPlayer = null; // variable pour stocker le lecteur audio actuel

recognition.onresult = function(event) {
  let transcription = "";
  for (let i = event.resultIndex; i < event.results.length; i++) {
    if (event.results[i].isFinal) {
      transcription += event.results[i][0].transcript;
    }
  }
  document.querySelector('#transcription').textContent = transcription;

  // Charge une musique en fonction du nom donné par l'utilisateur
  if (transcription.includes('musique')) {
    if (transcription.includes('classique')) {
      if (audioPlayer) {
        audioPlayer.pause(); // arrêter la musique précédente
      }
      audioPlayer = new Audio('musique/classique.mp3');
      document.querySelector('#play-button').addEventListener('click', function() {
        audioPlayer.play();
      });
    } else if (transcription.includes('rap')) {
      if (audioPlayer) {
        audioPlayer.pause(); // arrêter la musique précédente
      }
      audioPlayer = new Audio('musique/rap.mp3');
      document.querySelector('#play-button').addEventListener('click', function() {
        audioPlayer.play();
      });
    } else if (transcription.includes('pop')) {
      if (audioPlayer) {
        audioPlayer.pause(); // arrêter la musique précédente
      }
      audioPlayer = new Audio('musique/pop.mp3');
      document.querySelector('#play-button').addEventListener('click', function() {
        audioPlayer.play();
      });
    } else if (transcription.includes('hip-hop')) {
      if (audioPlayer) {
        audioPlayer.pause(); // arrêter la musique précédente
      }
      audioPlayer = new Audio('musique/hiphop.mp3');
      document.querySelector('#play-button').addEventListener('click', function() {
        audioPlayer.play();
      });
  }
}
}

recognition.start();