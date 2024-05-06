// expose.js

window.addEventListener('DOMContentLoaded', init);
var hornSelector, volumeRange, playButton;

function hornChange(value, audio) {
  // Find the image in the document (direct child of expose)
  const hornPicture = document.querySelector("#expose > img");
  // Set image's src and alt based on what is selected
  // Set audio's src based on what is selected
  if(value == "select") {
    hornPicture.src = "assets/images/no-image.png";
    hornPicture.alt = "No image selected";
    audio.src = "";
  }
  else if (value == "air-horn") {
    hornPicture.src = "assets/images/air-horn.svg";
    hornPicture.alt = "Air horn selected";
    audio.src = "assets/audio/air-horn.mp3";
  }
  else if (value == "car-horn") {
    hornPicture.src = "assets/images/car-horn.svg";
    hornPicture.alt = "Car horn selected";
    audio.src = "assets/audio/car-horn.mp3";
  }
  else if (value == "party-horn") {
    hornPicture.src = "assets/images/party-horn.svg";
    hornPicture.alt = "Party horn selected";
    audio.src = "assets/audio/party-horn.mp3";
  }
}

function volumeChange(value, audio) {
  // Find icon in the document (direct child of volume control div)
  const volumeIcon = document.querySelector("#volume-controls > img");
  // Set audio to selected audio
  audio.volume = value / 100.0;
  // Set src & altbased on volume range value
  if(value == 0) {
    volumeIcon.src = "assets/icons/volume-level-0.svg";
    volumeIcon.alt = "Volume level 0";
  }
  else if(value < 33) {
    volumeIcon.src = "assets/icons/volume-level-1.svg";
    volumeIcon.alt = "Volume level 1";
  }
  else if (value < 67) {
    volumeIcon.src = "assets/icons/volume-level-2.svg";
    volumeIcon.alt = "Volume level 2";
  }
  else {
    volumeIcon.src = "assets/icons/volume-level-3.svg";
    volumeIcon.alt = "Volume level 3";
  }
}

function playSound(value, audio) {
  if (value == "party-horn") {
    const confetti = new JSConfetti();
    confetti.addConfetti();
  }
  if (value != "select") {
    audio.play();
  }
}

function init() {
  // Get selectors for horn type / volume / play button
  const hornSelector = document.getElementById("horn-select");
  const volumeRange = document.getElementById("volume");
  const playButton = document.querySelector("button");

  // Get selector for audio (right after button)
  const audio = document.querySelector("button + audio");
  audio.volume = volumeRange.value / 100.0;

  // Add event listener for change in horn
  hornSelector.addEventListener('change', () => hornChange(hornSelector.value, audio));
  // Add event listener for change in volume
  volumeRange.addEventListener('input', () => volumeChange(volumeRange.value, audio));
  // Add event listener for click on play button
  playButton.addEventListener('click', () => playSound(hornSelector.value, audio));
}

