var elementStopWatchNumber = document.getElementById('number')
var minutChanged = false
var hourChanged = false
var dayChanged = false
var executionTimer

function pause() {
    clearTimeout(executionTimer)
}

function start() {
    executionTimer = setInterval(addSecond, 1000)

    function addSecond() {
        var stopWatchNumber = elementStopWatchNumber.innerText

        minutChanged = getSecond() == '59' && getMinute() != '59' && getHour() != '24'
        hourChanged = getMinute() == '59' && getSecond() == '59' && getHour() != '23'
        dayChanged = getHour() == '23' && getMinute() == '59' && getSecond() == '59'

        if (minutChanged) {
            setStopWatchNumber(getHour(), addZeroInFront(parseInt(getMinute()) + 1), '00')

        } else if (hourChanged) {
            setStopWatchNumber(addZeroInFront(parseInt(getHour()) + 1), '00', '00')

        } else if (dayChanged) {
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