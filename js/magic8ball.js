class Magic8Ball {
    constructor() {
        this.responses = [
            "It is certain.",
            "It is decidedly so.",
            "Without a doubt.",
            // ... (other responses)
            "Very doubtful."
        ];
    }

    askQuestion() {
        const index = Math.floor(Math.random() * this.responses.length);
        return this.responses[index];
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const magic8Ball = new Magic8Ball();
    const askButton = document.getElementById('askButton');
    const responseDiv = document.getElementById('response');
    const magicBallDiv = document.getElementById('magicBall');
    const soundEffect = new Audio('assets/audio/Shaking.wav');

    askButton.addEventListener('click', () => {
        const response = magic8Ball.askQuestion();
        responseDiv.textContent = response;

        // Play sound effect
        soundEffect.play();

        // Add animation to the Magic 8 Ball
        magicBallDiv.classList.add('shake');

        // Clear animation class after a delay
        setTimeout(() => {
            magicBallDiv.classList.remove('shake');
        }, 800); // Duration of the shake animation

        // Show response with fadeIn animation
        responseDiv.classList.add('show');
    });
});
