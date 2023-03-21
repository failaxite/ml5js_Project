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
      audioPlayer = new Audio('musique/test.mp3');
      document.querySelector('#play-button').addEventListener('click', function() {
        audioPlayer.play();
      });
    } else if (transcription.includes('jazz')) {
      if (audioPlayer) {
        audioPlayer.pause(); // arrêter la musique précédente
      }
      audioPlayer = new Audio('musique/Tom Sawyer - musique de générique Français.mp3');
      document.querySelector('#play-button').addEventListener('click', function() {
        audioPlayer.play();
      });
    } else if (transcription.includes('rock')) {
      if (audioPlayer) {
        audioPlayer.pause(); // arrêter la musique précédente
      }
      audioPlayer = new Audio('musique-rock.mp3');
      document.querySelector('#play-button').addEventListener('click', function() {
        audioPlayer.play();
      });
    }
  }
}

recognition.start();