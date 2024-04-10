// Function to play audio based on the provided audio ID
function playAudio(audioId) {
  // Select the audio element within the specified grid-item using the audioId
  var audio = document.querySelector("." + audioId + " audio");
  // Play the selected audio
  audio.play();
}

// Function to convert text to speech
function textToAudio() {
  // Get the text from the textarea input
  let msg = document.getElementById("text-to-speech").value;
  // Create a new SpeechSynthesisUtterance object
  let speech = new SpeechSynthesisUtterance();
  // Sets the language of the speech
  speech.lang = "en-US";
  // Sets the text to be spoken
  speech.text = msg;
  // Sets the volume of the speech
  speech.volume = 1;
  // Sets the rate of the speech (speed)
  speech.rate = 1;
  // Sets the pitch of the speech
  speech.pitch = 1.5;
  // Trigger the speech synthesis to speak the provided text
  window.speechSynthesis.speak(speech);
}
