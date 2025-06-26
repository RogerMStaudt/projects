var time = document.querySelector('#second')
var regionClick = document.querySelector('.regionClick')
var numberTime = document.getElementsByTagName('p')[0]
var numberClicks = document.querySelector('#numberClicks')
var clickCounterStarted = false

function start() {
    if (time.value == '') {
        return alert('Select a time before you start!')
    }

    setSecondAppearance(false);

    if (!clickCounterStarted) {
        var timer = setInterval(calculateClicks, 1000)
        var numberOfClicks = 0

        function calculateClicks() {
            numberTime.innerHTML--
        
            if (numberTime.innerText == 0) {
                clearInterval(timer)

                clickPerSecond = numberTime.value / time.value;
                return alert('Great! Your CPS was ' + clickPerSecond)
            }
        }

        regionClick.addEventListener("click", function () {
            numberOfClicks++
            
            setNumberClicks(numberOfClicks)
        })

        clickCounterStarted = true
    }
}

function setNumberTime() {
    numberTime.innerHTML = time.value
}

function setNumberClicks(number) {
    numberClicks.innerHTML = number
}

function setSecondAppearance(disabledEnable) {
    time.disabled = disabledEnable
}