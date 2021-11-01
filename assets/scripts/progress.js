circle.style.strokeDasharray = circleCalc;
circle.style.strokeDashoffset = circleCalc;

function setProgress(percent) {
    const offset = circleCalc - (percent / 100) * circleCalc;
    circle.style.strokeDashoffset = offset;
}
