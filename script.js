// Function to show more reasons why I love you
function showMoreReasons() {
    const reasonsList = document.getElementById("reasons-list");
    const moreReasons = [
        "You support me no matter what. 💖",
        "Every conversation with you is special. 💬",
        "You always know how to make me smile. 😊",
        "You're my safe place. 🏡",
        "I love everything about you. ❤️"
    ];
    
    moreReasons.forEach(reason => {
        let li = document.createElement("li");
        li.textContent = reason;
        reasonsList.appendChild(li);
    });
}
function animateLetter() {
    const letterText = `My Love, 💖  

From the moment you entered my life, everything changed. You are the light that brightens my darkest days and the warmth that fills my heart. Every conversation, every laughter, and every little moment with you feels like a dream I never want to wake up from.  

You make my world so much more beautiful just by being in it. I love you, not just for who you are, but for how you make me feel—special, cherished, and loved beyond words.  

Forever yours, ❤️`;

    const letterElement = document.getElementById("letter");
    letterElement.innerHTML = "";  
    let index = 0;

    function typeLetter() {
        if (index < letterText.length) {
            letterElement.innerHTML += letterText.charAt(index);
            index++;
            setTimeout(typeLetter, 40);  // Slower typing effect
        }
    }
    
    typeLetter();
}

document.addEventListener("DOMContentLoaded", () => {
    animateLetter();
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("gift-button").addEventListener("click", revealGift);
});

function revealGift() {
    const video = document.getElementById("gift-video");
    
    // Check if the video source is correctly loaded
    if (!video.src || video.src === window.location.href) {
        alert("Video file is missing or not found!");
        return;
    }

    video.style.display = "block";  
    video.play();  
}

document.addEventListener("DOMContentLoaded", function () {
    const spotifyPlayer = document.getElementById("spotify-player");

    function playMusic() {
        spotifyPlayer.src += "?autoplay=1"; // Add autoplay to the URL
        document.removeEventListener("click", playMusic); // Remove event listener after first interaction
    }

    document.addEventListener("click", playMusic); // Triggers autoplay after any click
});

document.getElementById("show-letter-btn").addEventListener("click", function () {
    const letter = document.getElementById("letter");
    letter.style.display = "block";
    letter.style.opacity = "0";
    this.style.display = "none"; // Hide button after clicking

    setTimeout(() => {
        letter.style.transition = "opacity 1.5s ease-in-out";
        letter.style.opacity = "1";
    }, 100);
});

// Function to check answer for the quiz
function checkAnswer(answer) {
    const response = document.getElementById("quiz-response");
    if (answer === 'correct') {
        response.innerText = "Yay! I knew it! ❤️";
    } else {
        response.innerText = "Aww... Try again? 😢";
    }
    response.style.display = "block";
}

// Function to handle relationship quiz submission
document.getElementById("relationship-quiz-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your answers have been submitted! Let's see how well you know us. 😊");
});

// Rock Paper Scissors Game with Scoreboard
const choices = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;

const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result");
const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");
const gameOverMessage = document.getElementById("game-over-message");
const resetButton = document.getElementById("reset-button");
const handsContainer = document.getElementById("hands-container");
const celebrationContainer = document.getElementById("celebration");

// Function to play the game
function playGame(userChoice) {
    if (userScore === 3 || computerScore === 3) return;  // Stop game if someone already won

    handsContainer.classList.add("animate-hands");

    setTimeout(() => {
        handsContainer.classList.remove("animate-hands");

        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        userChoiceDisplay.innerText = `You: ${userChoice} ✋`;
        computerChoiceDisplay.innerText = `LoveBot: ${computerChoice} 🤖`;

        let result = "";
        if (userChoice === computerChoice) {
            result = "It's a Tie! 😊";
        } else if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")
        ) {
            result = "You Win! ❤️🎉";
            userScore++;
            showCelebration();
        } else {
            result = "LoveBot Wins! 😢";
            computerScore++;
        }

        resultDisplay.innerText = result;
        userScoreDisplay.innerText = userScore;
        computerScoreDisplay.innerText = computerScore;

        if (userScore === 3) {
            gameOverMessage.innerText = "You are the Champion! 🎉💖";
            gameOverMessage.style.display = "block";
            resetButton.style.display = "block";
        } else if (computerScore === 3) {
            gameOverMessage.innerText = "LoveBot Wins! 😢 Better luck next time!";
            gameOverMessage.style.display = "block";
            resetButton.style.display = "block";
        }
    }, 1500);
}

// Function to show hearts when user wins
function showCelebration() {
    celebrationContainer.innerHTML = "";
    for (let i = 0; i < 10; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = `${Math.random() * 90}%`;
        heart.style.top = `${Math.random() * 90}%`;
        celebrationContainer.appendChild(heart);

        setTimeout(() => heart.remove(), 1500);
    }
}

// Function to reset the game
function resetGame() {
    userScore = 0;
    computerScore = 0;
    userScoreDisplay.innerText = userScore;
    computerScoreDisplay.innerText = computerScore;
    resultDisplay.innerText = "";
    userChoiceDisplay.innerText = "";
    computerChoiceDisplay.innerText = "";
    gameOverMessage.style.display = "none";
    resetButton.style.display = "none";
}

function revealGift() {
    
}

document.addEventListener("DOMContentLoaded", function () {
    const heartContainer = document.createElement("div");
    heartContainer.classList.add("heart-container");
    document.body.appendChild(heartContainer);

    function createFloatingHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        // Random position anywhere on the page
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = Math.random() * window.innerHeight + "px";
        heart.style.animationDuration = Math.random() * 5 + 3 + "s"; // Random speed
        heart.style.fontSize = Math.random() * 20 + 10 + "px"; // Varying sizes

        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove(); // Remove after animation
        }, 5000);
    }

    // Generate hearts every 300ms
    setInterval(createFloatingHeart, 300);
});





// Function to reveal the surprise gift
function revealGift() {
    const message = document.getElementById("gift-message");
    const video = document.getElementById("gift-video");

    message.style.display = "block";  // Show the text message
    video.style.display = "block";  // Show the video
    video.play();  // Auto-play the video
}

// Enhance the starry background effect
const canvas = document.getElementById("starry-sky");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const numStars = 150;

// Create stars
for (let i = 0; i < numStars; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.1
    });
}

// Function to draw stars
function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";

    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
    });
}

// Function to update star positions (twinkling effect)
function updateStars() {
    stars.forEach(star => {
        star.y += star.speed;
        if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
        }
    });
}

// Function to animate the starry background
function animate() {
    drawStars();
    updateStars();
    requestAnimationFrame(animate);
}

animate();

const gameArea = document.querySelector(".game-area");
const basket = document.getElementById("basket");
const scoreDisplay = document.getElementById("score-count");
const livesDisplay = document.getElementById("lives-count");
const restartBtn = document.getElementById("restart-btn");

let basketPosition = 125;
let score = 0;
let lives = 5;
let gameInterval;

// Move basket left and right
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" && basketPosition > 0) {
        basketPosition -= 20;
    } else if (event.key === "ArrowRight" && basketPosition < 250) {
        basketPosition += 20;
    }
    basket.style.left = basketPosition + "px";
});

// Function to create falling hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 280 + "px"; // Random x position
    heart.style.top = "0px"; // Start from top
    gameArea.appendChild(heart);

    let heartFall = setInterval(() => {
        let heartTop = parseInt(window.getComputedStyle(heart).getPropertyValue("top"));
        heart.style.top = heartTop + 5 + "px"; // Move heart down

        // Check if heart is caught
        if (heartTop > 350) {
            let basketLeft = basket.offsetLeft;
            let heartLeft = heart.offsetLeft;

            if (heartLeft > basketLeft - 30 && heartLeft < basketLeft + 50) {
                score++;
                scoreDisplay.innerText = score;
                clearInterval(heartFall);
                heart.remove();
            } else {
                lives--;
                livesDisplay.innerText = lives;
                clearInterval(heartFall);
                heart.remove();

                if (lives === 0) {
                    clearInterval(gameInterval);
                    alert("Game Over! Your score: " + score);
                    restartBtn.style.display = "block";
                }
            }
        }
    }, 50);
}

// Function to start game
function startGame() {
    restartBtn.style.display = "none";
    score = 0;
    lives = 5;
    scoreDisplay.innerText = score;
    livesDisplay.innerText = lives;
    gameInterval = setInterval(createHeart, 1000);
}

// Function to restart game
function restartGame() {
    document.querySelectorAll(".heart").forEach(heart => heart.remove());
    startGame();
}

startGame();

