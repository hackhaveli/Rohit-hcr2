// ["Rohit hcr2", "You Know What should you do?","Use Your Own!","Have a great Day!"]

const words = ["Rohit hcr2", "You Know What should you do?","Use Your Own!","Have a great Day!"]; // Words to be animated
let wordIndex = 0;
let letterIndex = 0;
const textElement = document.getElementById("textAnimation");

function animateText() {
    if (letterIndex < words[wordIndex].length) {
        textElement.textContent += words[wordIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(animateText, 150); // Adjust the speed of typing animation
    } else {
        setTimeout(eraseText, 1000); // Delay before erasing text
    }
}

function eraseText() {
    if (letterIndex > 0) {
        textElement.textContent = words[wordIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(eraseText, 50); // Adjust the speed of erasing animation
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(animateText, 500); // Delay before starting to write next word
    }
}

animateText(); // Start the animation
