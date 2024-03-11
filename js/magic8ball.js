class Magic8Ball {
    constructor() {
        this.responses = [
            "Yes",
            "No",
            "Maybe",
            "Ask again later",
            "Cannot predict now",
            "Concentrate and ask again",
            "Don't count on it",
            "My sources say no",
            "Outlook not so good",
            "Very doubtful",
            "Signs point to yes",
            "Definitely not",
            "Without a doubt",
            "Reply hazy, try again",
            "Better not tell you now",
            "Outlook good",
            "As I see it, yes",
            "Most likely",
            "Yes, definitely",
            "My reply is no"
        ];
        this.images = [
            "assets/images/Magic_eight_ball_1.svg",
            "assets/images/Magic_eight_ball.svg",
        ];
        this.currentImageIndex = 0;
        this.originalImageIndex = 0;
        this.imageToggled = false; // Track whether the image has been toggled
    }

    askQuestion() {
        const index = Math.floor(Math.random() * this.responses.length);
        return this.responses[index];
    }

    changeImage() {
        return this.images[this.currentImageIndex];
    }

    resetImage() {
        this.currentImageIndex = this.originalImageIndex;
        return this.images[this.originalImageIndex];
    }

    toggleImage() {
        if (!this.imageToggled) {
            this.imageToggled = true;
            this.currentImageIndex = 1; // Switch to Magic_eight_ball.svg
            return this.images[this.currentImageIndex];
        } else {
            return this.images[1]; // Always return the second image after the first toggle
        }
    }
}

window.addEventListener('load', () => {
    const magic8Ball = new Magic8Ball();
    const magicBallImage = document.getElementById('magicBallImage');
    const responseDiv = document.getElementById('response');
    const soundEffect = new Audio('assets/audio/Shaking.wav');

    // Set the initial image
    magicBallImage.src = magic8Ball.resetImage();

    magicBallImage.addEventListener('click', () => {
        // Clear previous response and animation class
        responseDiv.textContent = "";
        responseDiv.classList.remove('show'); // Remove 'show' class for re-triggering animation
        magicBallImage.parentElement.classList.remove('shake');

        // Play sound effect
        soundEffect.play();

        // Change magic 8 ball image
        magicBallImage.src = magic8Ball.toggleImage();

        // Add animation to the Magic 8 Ball
        magicBallImage.parentElement.classList.add('shake');

        // Clear animation class after a delay
        setTimeout(() => {
            magicBallImage.parentElement.classList.remove('shake');
        }, 800); // Duration of the shake animation

        // Show response with fadeIn animation after a delay
        setTimeout(() => {
            responseDiv.textContent = magic8Ball.askQuestion();
            responseDiv.classList.add('show');
        }, 1000); // Delay before applying the fadeIn animation
    });

    // Reset the image to the original one on page refresh
    window.addEventListener('beforeunload', () => {
        magicBallImage.src = magic8Ball.resetImage();
    });
});
