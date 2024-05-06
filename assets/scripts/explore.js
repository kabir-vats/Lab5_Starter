// explore.js

window.addEventListener('DOMContentLoaded', init);
var voiceList;

function populateVoices(voiceSelect) {
  // Get voices
  voiceList = speechSynthesis.getVoices();
  // Loop through voice list
  for(let i = 0; i < voiceList.length; i++) {
    // Create option
    const option = document.createElement("option");
    // Set option display to be voice and language
    option.textContent = voiceList[i].name + voiceList[i].lang;
    option.value = i;
    // Append the voice option to the selector
    voiceSelect.appendChild(option);
  }
}

function speak(text, voice) {
  // initialize what to speak
  const dialogue = new SpeechSynthesisUtterance(text);
  // initialize voice
  dialogue.voice = voice;
  // say it
  speechSynthesis.speak(dialogue);
  
}

function changeIcon() {
  // get the image for talking
  const face = document.querySelector("img");
  if (speechSynthesis.speaking) {
    face.src="assets/images/smiling-open.png";
    face.alt="Smiling face with open mouth";
  }
  // Keep face open while speaking
  else {
    face.src="assets/images/smiling.png";
    face.alt="Smiling face";
  }
}

function init() {
  // Query document for voice selector
  const voiceSelect = document.querySelector("#voice-select");
  // Query document for push-to-talk button
  const playButton = document.querySelector("button");
  // Query document for text area
  const speechText = document.querySelector("textarea");
  // Function to govern face depending on speaking
  setInterval(changeIcon, 1);
  // Populate voice options
  populateVoices(voiceSelect);
  // Account for list not loading immediately
  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = () => populateVoices(voiceSelect);
  }



  // Set event listener for button presses
  // Calls based on selected voice (index value), input text, and list of voices
  playButton.addEventListener('click', () => speak(speechText.value, voiceList[voiceSelect.value]));

}
