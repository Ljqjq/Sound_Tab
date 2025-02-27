"use strict";

console.log("✅ script.js is running!");

chrome.storage.local.get(["currentSound"]).then((result) => {
    let currentSound = result.currentSound || "death's_door_effect.mp3"; // Default if not set
    console.log("Value must be", currentSound);

    // Now that we have the correct sound, create and play audio
    const audio = new Audio(currentSound.startsWith("http") ? currentSound : chrome.runtime.getURL(currentSound));

    audio.play()
        .then(() => console.log("✅ Audio played successfully"))
        .catch(error => console.log("❌ Audio play failed:", error));
});
