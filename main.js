window.addEventListener('load', () => {
    var hour,
    minute,
    second,
    interval,
    start,
    stop,
    reset,
    minutes,
    hours,
    milliseconds,
    seconds;

    hour = document.querySelector('#hour');
    minute = document.querySelector('#minute');
    second = document.querySelector('#seconds');
    milliseconds = document.querySelector('#milliseconds');
    start = document.querySelector('#start');
    stop = document.querySelector('#stop');
    reset = document.querySelector('#reset');
    seconds = 0
    minutes = 0;
    hours = 0;


    start.addEventListener('click', function begin(){

        document.getElementById('start').style.display = "none"
        document.getElementById('stop').style.display = "inline"

        interval = setTimeout(begin, 10)
        if (milliseconds.innerHTML >= 0) {
            milliseconds.innerHTML++
        }
        if (milliseconds.innerHTML == 100){
            milliseconds.innerHTML = 00;
            seconds++
            second.innerHTML = seconds
        }
        if (seconds <= 9) {
            second.innerHTML = "0" + seconds;
        }
        if (second.innerHTML == 60) {
            second.innerHTML = "00";
            minutes++
            minute.innerHTML = minutes + ":"
        }
        if (minutes <= 9) {
            minute.innerHTML = "0" + minutes + ":" 
        }
        if (minutes == 60) {
            minutes = 0
            hours++
            hour.innerHTML = hours + ":"
        }
        if (hours <= 9) {
            hour.innerHTML = "0" + hours + ":" 
        }
        
        
    })

    stop.addEventListener('click', () => {
        clearTimeout(interval)
        document.getElementById('start').style.display = "inline"
        document.getElementById('start').innerText = "Resume"
        document.getElementById('stop').style.display = "none"
    })
    reset.addEventListener('click', () => {
        document.getElementById('start').innerText = "Start"
        document.getElementById('stop').style.display = "none"
        document.getElementById('start').style.display = "inline"
        hour.innerHTML = "00:";
        minute.innerHTML = "00:";
        second.innerHTML = "00";
        milliseconds.innerHTML = "00"
        seconds = 0
        minutes = 0;
        hours = 0;
        clearTimeout(interval);
    })

    console.log(second)

})