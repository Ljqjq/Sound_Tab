"use strict";

const playButtons = document.getElementsByClassName("play-sound");
const soundData = document.querySelector(".sound-data");
const addSoundInput = document.querySelector("#add-sound-input");
const addSoundButton = document.querySelector(".add-sound-button");

console.log(playButtons);
console.log(soundData);
console.log(addSoundInput);

const soundsArray = JSON.parse(localStorage.getItem("soundsArray")) || ["stress_effect.mp3", "death's_door_effect.mp3", "enter-tavern-sound.mp3", "https://www.myinstants.com/media/sounds/armatura_P29FH2w.mp3"];
var currentSound = "";

const audio = new Audio();


function playSound(link = soundsArray[0]) {
    audio.src = link;
    audio.play();
}

function renderSoundData() {
    soundData.innerHTML = "";
    for (let i = 0; i < soundsArray.length; i++) {
        const playButton = document.createElement("button");
        playButton.innerHTML = soundsArray[i];
        playButton.addEventListener("click", () => {
            currentSound = soundsArray[i];
            chrome.storage.local.set({"currentSound": currentSound});
            playSound(soundsArray[i]);
            console.log(soundsArray[i]);
        });
        soundData.appendChild(playButton);
        
    }
}

function addSound(soundName) {
    if (soundName === "") {
        console.log("NAH MAN THERE IS NO SUCH SOUND");
        return;
    }

    soundsArray.push(soundName);
    localStorage.setItem("soundsArray", JSON.stringify(soundsArray));

    renderSoundData();
}

renderSoundData();
addSoundButton.addEventListener("click", () => {
    addSound(addSoundInput.value);
    addSoundInput.value = "";
});
