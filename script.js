
let timerInterval;
let elapsedTime = 0;
let isRunning = false;

const timeDisplay = document.getElementById('time');
const lapsContainer = document.getElementById('laps');

function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function updateTime() {
    elapsedTime += 100;
    timeDisplay.textContent = formatTime(elapsedTime);
}

document.getElementById('start').addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(updateTime, 100);
    }
});

document.getElementById('pause').addEventListener('click', () => {
    isRunning = false;
    clearInterval(timerInterval);
});

document.getElementById('reset').addEventListener('click', () => {
    isRunning = false;
    clearInterval(timerInterval);
    elapsedTime = 0;
    timeDisplay.textContent = "00:00:00";
    lapsContainer.innerHTML = "";
});

document.getElementById('lap').addEventListener('click', () => {
    if (isRunning) {
        const lapTime = document.createElement('div');
        lapTime.className = 'lap';
        lapTime.textContent = formatTime(elapsedTime);
        lapsContainer.appendChild(lapTime);
    }
});
