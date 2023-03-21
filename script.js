const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
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
      let audio = new Audio('musique/test.mp3');
      let playButton = document.querySelector('#play-button');
      if (playButton) {
        playButton.addEventListener('click', function() {
          audio.play();
        });
      }
    } else if (transcription.includes('jazz')) {
      let audio = new Audio('musique-jazz.mp3');
      let playButton = document.querySelector('#play-button');
      if (playButton) {
        playButton.addEventListener('click', function() {
          audio.play();
        });
      }
    } else if (transcription.includes('rock')) {
      let audio = new Audio('musique-rock.mp3');
      let playButton = document.querySelector('#play-button');
      if (playButton) {
        playButton.addEventListener('click', function() {
          audio.play();
        });
      }
    }
  }
}

recognition.start();
