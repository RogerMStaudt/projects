function setDate() {
    var currentDate = new Date();
    let currentHour = currentDate.getHours();
    let currentMinute = currentDate.getMinutes();
    let currentSecond = currentDate.getSeconds();

    let hourField = document.getElementsByTagName('h1')[0];

    hourField.innerHTML = concatDate(currentHour, currentMinute, currentSecond);

    function concatDate(hour, minute, second) {
        return hour + ':' + minute + ':' + second;
    }
}

setInterval(setDate, 1000);