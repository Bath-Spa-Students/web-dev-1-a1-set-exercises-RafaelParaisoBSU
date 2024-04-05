function playAudio(audioId) {
  var audio = document.querySelector("." + audioId + " audio");
  audio.play();
}

function redirectToTextToSpeechPage() {
  // Replace 'text_to_speech.html' with the path to your desired HTML page
  window.location.href = 'texttospeech.html';
}