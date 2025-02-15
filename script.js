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

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".journey-img");

    function revealOnScroll() {
        images.forEach(img => {
            const imgTop = img.getBoundingClientRect().top;
            if (imgTop < window.innerHeight * 0.85) {
                img.classList.add("reveal");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run on page load in case some images are visible initially
});
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".journey-img, .favorite-moment-img");

    function revealOnScroll() {
        images.forEach(img => {
            const imgTop = img.getBoundingClientRect().top;
            if (imgTop < window.innerHeight * 0.85) {
                img.classList.add("reveal");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run on page load in case it's already in view
});


// Heart Formation with Stars
function setupHeartFormation() {
    const button = document.getElementById("start-heart-formation");
    const canvas = document.getElementById("starry-sky");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    let stars = [];
    for (let i = 0; i < 100; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            targetX: 0,
            targetY: 0,
            size: 2 + Math.random() * 3
        });
    }
    
    button.addEventListener("click", () => {
        arrangeStarsIntoHeart();
    });
    
    function arrangeStarsIntoHeart() {
        let heartPoints = [];
        for (let t = 0; t < Math.PI * 2; t += 0.1) {
            let x = 250 + 100 * (16 * Math.pow(Math.sin(t), 3));
            let y = 250 - 100 * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
            heartPoints.push({ x, y });
        }
        
        stars.forEach((star, index) => {
            let target = heartPoints[index % heartPoints.length];
            star.targetX = target.x + canvas.width / 2 - 250;
            star.targetY = target.y + canvas.height / 2 - 250;
        });
        animateStars();
    }
    
    function animateStars() {
        let progress = 0;
        let interval = setInterval(() => {
            progress += 0.02;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            stars.forEach(star => {
                star.x += (star.targetX - star.x) * progress;
                star.y += (star.targetY - star.y) * progress;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fillStyle = "white";
                ctx.fill();
            });
            
            if (progress >= 1) clearInterval(interval);
        }, 50);
    }
}
