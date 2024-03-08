class Magic8Ball {
    constructor() {
        this.responses = [
            "It is certain.",
            "It is decidedly so.",
            "Without a doubt.",
            "Yes - definitely.",
            "You may rely on it.",
            "As I see it, yes.",
            "Most likely.",
            "Outlook good.",
            "Yes.",
            "Signs point to yes.",
            "Reply hazy, try again.",
            "Ask again later.",
            "Better not tell you now.",
            "Cannot predict now.",
            "Concentrate and ask again.",
            "Don't count on it.",
            "My reply is no.",
            "My sources say no.",
            "Outlook not so good.",
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

    askButton.addEventListener('click', () => {
        const response = magic8Ball.askQuestion();
        responseDiv.textContent = response;
    });
});
