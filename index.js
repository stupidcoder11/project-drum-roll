// Returns the audio file for the respective key
function keyAudioMapper(key) {
  let audioFile = "";
  switch (key) {
    case "w":
      audioFile = "tom-1.mp3";
      break;
    case "a":
      audioFile = "tom-2.mp3";
      break;
    case "s":
      audioFile = "tom-3.mp3";
      break;
    case "d":
      audioFile = "tom-4.mp3";
      break;
    case "j":
      audioFile = "crash.mp3";
      break;
    case "k":
      audioFile = "kick-bass.mp3";
      break;
    case "l":
      audioFile = "snare.mp3";
      break;
  }
  return audioFile;
}

// Plays the audioFile if it's there inside the sounds folder
function playAudio(audioFile) {
  if (audioFile) {
    let audio = new Audio(`sounds/${audioFile}`);
    audio.play();
  }
}

// Registers all the buttons with click event and plays the respective audio file associated with the key mentioned on it
document.querySelectorAll("button").forEach((button) => {
  const key = button.classList[0];
  const audioFile = keyAudioMapper(key);
  button.addEventListener("click", playAudio(audioFile));
});

// Registers the keys when they're pressed (a.k.a onkeydown event)
document.onkeydown = ({ key }) => {
  let audioFile = keyAudioMapper(key);
  playAudio(audioFile);
};