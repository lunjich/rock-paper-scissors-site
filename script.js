function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let reslt = '';

    if (playerChoice === computerChoice) {
        result = 'its a draw! you both chose ' + computerChoice;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'you win! ' + playerChoice + ' beats ' + computerChoice;
    } else {
        result = 'you lose! ' + computerChoice + ' beats ' + playerChoice;
    }

    document.getElementById('result').textContent = result;
}
