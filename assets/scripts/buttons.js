workTimeInput.value = localStorage.getItem('workTime');
breakTimeInput.value = localStorage.getItem('breakTime');

//Enabling Form Submit On Defining Time, Reset & Pause/Resume Button
function formSubmit() {
    localStorage.setItem('workTime', workTimeInput.value);
    localStorage.setItem('breakTime', breakTimeInput.value);
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    formSubmit();
});

function start() {
    let btn = localStorage.getItem('btn');

    if (btn === 'focus') {
        mins = +localStorage.getItem('workTime') || 1;
    } else {
        mins = +localStorage.getItem('breakTime') || 1;
    }

    seconds = mins * 60;
    totalSecs = mins * 60;
    setTimeout(decremenT(), 60);
    paused = false;
}
startBtn.addEventListener('click', start);

function reset() {
    startBtn.style.transform = 'scale(1)';
    clearTimeout(initial);
    setProgress(0);
    minutesDiv.textContent = 0;
    secondsDiv.textContent = 0;
}
resetBtn.addEventListener('click', reset);

function pauseResume() {
    if (paused === undefined) {
        return;
    }
    if (paused) {
        paused = false;
        initial = setTimeout('decremenT()', 60);
        pauseBtn.textContent = 'Pause';
        pauseBtn.classList.remove('resume');
    } else {
        clearTimeout(initial);
        pauseBtn.textContent = 'Resume';
        pauseBtn.classList.add('resume');
        paused = true;
    }
}
pauseBtn.addEventListener('click', pauseResume);

