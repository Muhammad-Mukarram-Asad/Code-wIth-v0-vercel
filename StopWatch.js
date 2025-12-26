<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
    body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
    margin: 0;
}

.stopwatch-container {
    text-align: center;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

#display {
    font-size: 3rem;
    margin-bottom: 20px;
    font-weight: bold;
    color: #333;
}

button {
    padding: 10px 20px;
    font-size: 1rem;
    margin: 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

#startStopBtn {
    background-color: #28a745;
    color: white;
}

#startStopBtn:hover {
    background-color: #218838;
}

#resetBtn {
    background-color: #dc3545;
    color: white;
}

#resetBtn:hover {
    background-color: #c82333;
}
</style>
</head>

<body>
    <div class="stopwatch-container">
        <div id="display">00:00:00</div>
        <button id="startStopBtn">Start</button>
        <button id="resetBtn">Reset</button>
    </div>

    <script>
   let startTime;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

function timeToString(ms) {
    let seconds = Math.floor(ms / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function printTime() {
    elapsedTime = Date.now() - startTime;
    console.log("elapsed time ", elapsedTime);
    display.innerHTML = timeToString(elapsedTime);
}

function startStop() {
    if (isRunning) {
        // Stop the timer
        clearInterval(timerInterval);
        startStopBtn.innerHTML = 'hello';
        isRunning = false;
        // Adjust startTime to account for the pause
        startTime = Date.now() - elapsedTime;
    } else {
        // Start/Resume the timer
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(printTime, 1000); // Update every second
        startStopBtn.innerHTML = 'Stop';
        isRunning = true;
    }
}

function reset() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    display.innerHTML = '00:00:00';
    startStopBtn.innerHTML = 'Start';
    isRunning = false;
}

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);

    
    </script>
</body>
</html>

