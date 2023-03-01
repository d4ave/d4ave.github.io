// Get the canvas element and context
const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

// Set up the game variables
let score = 0;
let gameOver = false;

// Set up the snake
let snake = [
  {x: 10, y: 10},
  {x: 20, y: 10},
  {x: 30, y: 10}
];
let dx = 10;
let dy = 0;

// Set up the food
let food = {x: 0, y: 0};

// Set up the game loop
function gameLoop() {
  if (gameOver) {
    return;
  }

  // Move the snake
  for (let i = snake.length - 1; i > 0; i--) {
    snake[i].x = snake[i - 1].x;
    snake[i].y = snake[i - 1].y;
  }
  snake[0].x += dx;
  snake[0].y += dy;

  // Check for collisions with walls
  if (snake[0].x < 0 || snake[0].x >= canvas.width || snake[0].y < 0 || snake[0].y >= canvas.height) {
    gameOver = true;
  }

  // Check for collisions with food
  if (snake[0].x === food.x && snake[0].y === food.y) {
    score++;
    spawnFood();
    snake.push({x: snake[snake.length - 1].x, y: snake[snake.length - 1].y});
  }

  // Check for collisions with self
  for (let i = 1; i < snake.length; i++) {
    if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
      gameOver = true;
    }
  }

  // Clear the canvas and draw the game objects
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "red";
  context.fillRect(food.x, food.y, 10, 10);
  context.fillStyle = "green";
  snake.forEach(segment => {
    context.fillRect(segment.x, segment.y, 10, 10);
  });

  // Update the score
  document.getElementById("score").textContent = `Score: ${score}`;

  // Call the game loop again
  setTimeout(gameLoop, 100);
}

// Set up the keyboard input
document.addEventListener("keydown", event => {
  if (event.key === "ArrowLeft" && dx !== 10) {
    dx = -10;
    dy = 0;
  }
  if (event.key === "ArrowUp" && dy !== 10) {
    dx = 0;
    dy = -10;
  }
  if (event.key === "ArrowRight" && dx !== -10) {
    dx = 10;
    dy = 0;
  }
  if (event.key === "ArrowDown" && dy !== -10) {
    dx = 0;
    dy = 10;
  }
});
