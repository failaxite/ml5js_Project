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
}

recognition.start();