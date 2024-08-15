class Snake {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.tail = [{ x: this.x, y: this.y }];
        this.rotateX = 0;
        this.rotateY = 1;
    }

    move() {
        let newRect;
        const lastTail = this.tail[this.tail.length - 1];

        if (this.rotateX === 1) {
            newRect = { x: lastTail.x + this.size, y: lastTail.y };
        } else if (this.rotateX === -1) {
            newRect = { x: lastTail.x - this.size, y: lastTail.y };
        } else if (this.rotateY === 1) {
            newRect = { x: lastTail.x, y: lastTail.y + this.size };
        } else if (this.rotateY === -1) {
            newRect = { x: lastTail.x, y: lastTail.y - this.size };
        }

        this.tail.shift();
        this.tail.push(newRect);
    }
}

class Apple {
    constructor() {
        let isTouching;
        while (true) {
            isTouching = false;
            this.x = Math.floor(Math.random() * canvas.width / snake.size) * snake.size;
            this.y = Math.floor(Math.random() * canvas.height / snake.size) * snake.size;

            for (let i = 0; i < snake.tail.length; i++) {
                if (this.x === snake.tail[i].x && this.y === snake.tail[i].y) {
                    isTouching = true;
                    break;
                }
            }

            if (!isTouching) break;
        }
        this.size = snake.size;
        this.color = "#BB86FC";
    }
}

const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext('2d');

const snake = new Snake(20, 20, 20);
let apple = new Apple();

window.onload = () => {
    gameLoop();
};

function gameLoop() {
    setInterval(show, 1000 / 20); // 20 FPS
}

function show() {
    update();
    draw();
}

function update() {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    snake.move();
    eatApple();
    checkHitWall();
}

function checkHitWall() {
    const headTail = snake.tail[snake.tail.length - 1];

    if (headTail.x < 0) {
        headTail.x = canvas.width - snake.size;
    } else if (headTail.x >= canvas.width) {
        headTail.x = 0;
    }

    if (headTail.y < 0) {
        headTail.y = canvas.height - snake.size;
    } else if (headTail.y >= canvas.height) {
        headTail.y = 0;
    }
}

function eatApple() {
    const headTail = snake.tail[snake.tail.length - 1];
    
    if (headTail.x === apple.x && headTail.y === apple.y) {
        snake.tail.push({ x: apple.x, y: apple.y });
        apple = new Apple();
    }
}

function draw() {
    createRect(0, 0, canvas.width, canvas.height, "#121212");

    for (let i = 0; i < snake.tail.length; i++) {
        createRect(snake.tail[i].x + 2.5, snake.tail[i].y + 2.5, snake.size - 5, snake.size - 5, 'white');
    }

    canvasContext.font = "20px Arial";
    canvasContext.fillStyle = "#BB86FC";
    canvasContext.fillText("Score: " + (snake.tail.length - 1), canvas.width - 120, 18);

    createRect(apple.x, apple.y, apple.size, apple.size, apple.color);
}

function createRect(x, y, width, height, color) {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, width, height);
}

window.addEventListener("keydown", (event) => {
    setTimeout(() => {
        switch (event.keyCode) {
            case 37: // Left
                if (snake.rotateX !== 1) {
                    snake.rotateX = -1;
                    snake.rotateY = 0;
                }
                break;
            case 38: // Up
                if (snake.rotateY !== 1) {
                    snake.rotateX = 0;
                    snake.rotateY = -1;
                }
                break;
            case 39: // Right
                if (snake.rotateX !== -1) {
                    snake.rotateX = 1;
                    snake.rotateY = 0;
                }
                break;
            case 40: // Down
                if (snake.rotateY !== -1) {
                    snake.rotateX = 0;
                    snake.rotateY = 1;
                }
                break;
        }
    }, 1);
});
