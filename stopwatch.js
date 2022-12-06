let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

let hour = 00;
let minute = 00;
let second = 00;
let millisecond = 00;

start.addEventListener('click', function () {
    timer = true;
    stopWatch();
});

stop.addEventListener('click', function () {
    timer = false;
});

reset.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('millisec').innerHTML = "00";
});

function stopWatch() {
    if (timer) {
        millisecond++;

        if (millisecond == 100) {
            second++;
            millisecond = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        let hrString = hour;
        let minString = minute;
        let secString = second;
        let millisecString = millisecond;

        if (hour < 10) {
            hrString = "0" + hrString;
        }

        if (minute < 10) {
            minString = "0" + minString;
        }

        if (second < 10) {
            secString = "0" + secString;
        }

        if (millisecond < 10) {
            millisecString = "0" + millisecString;
        }

        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('millisec').innerHTML = millisecString;
        setTimeout(stopWatch, 10);
    }
}