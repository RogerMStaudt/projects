var elementStopWatchNumber = document.getElementById('number')

var executionTimer;

function pause() {
    clearTimeout(executionTimer)
}

function start() {
    executionTimer = setInterval(addSecond, 1000)

    function addSecond() {
        var stopWatchNumber = elementStopWatchNumber.innerText

        if (getSecond() == '59') {
            setStopWatchNumber(getHour(), addZeroInFront(parseInt(getMinute()) + 1), '00')

        } else if (getMinute() == '59') {
            setStopWatchNumber(addZeroInFront(parseInt(getHour()) + 1), '00', '00')

        } else if (getHour() == '24') {
            setStopWatchNumber('00', '00', '00')

        } else {
            setStopWatchNumber(getHour(), getMinute(), addZeroInFront(parseInt(getSecond()) + 1))
        }

        

        function getSecond() {
            return stopWatchNumber.substr(6, 2)
        }

        function getMinute() {
            return stopWatchNumber.substr(3, 2)
        }

        function getHour() {
            return stopWatchNumber.substr(0, 2)
        }
    }

    function setStopWatchNumber(hour, minute, second) {
        elementStopWatchNumber.innerHTML = hour + ':' + minute + ':' + second
    }

    function addZeroInFront(number) {
        return (number < 10) ? '0' + number : number;
    }
}

function reset() {
    elementStopWatchNumber.innerHTML = '00:00:00'
    
    clearTimeout(executionTimer)
}