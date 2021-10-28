localStorage.setItem('btn', 'focus');
let initial, totalSecs, perc, paused, mins, seconds;
//Time Decrement
function decremenT() {
    minutesDiv.textContent = Math.floor(seconds / 60);
    secondsDiv.textContent = seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`;
    if (circle.classList.contains('danger')) {
        circle.classList.remove('danger');
    }

    if (seconds > 0) {
        perc = Math.ceil(((totalSecs - seconds) / totalSecs) * 100);
        setProgress(perc);
        seconds--;
        initial = window.setTimeout('decremenT()', 1000);
        if (seconds < 10) {
            circle.classList.add('danger');
        }
    } else {
        mins = 0;
        seconds = 0;
        bell.play();
        let btn = localStorage.getItem('btn');

        if (btn === 'focus') {
            startBtn.textContent = 'Start Break';
            startBtn.classList.add('break');
            localStorage.setItem('btn', 'break');
        } else {
            startBtn.classList.remove('break');
            startBtn.textContent = 'start focus';
            localStorage.setItem('btn', 'focus');
        }
        startBtn.style.transform = 'scale(1)';
    }
}