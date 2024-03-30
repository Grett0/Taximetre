let boucle = 0;
setInterval(updateClock, 1000);
secondIndicatorInterval = setInterval(updateSecondIndicator, 1000);
let displayHours = document.getElementById('hours');
let displayMinutes = document.getElementById('minutes');
let displaySeconds = document.getElementById('seconds');

let hours = 0;
let minutes = 0;
let seconds = 0;

intervalId = setInterval(function() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    displayHours.textContent = (hours < 10) ? '0' + hours : hours;
    displayMinutes.textContent = (minutes < 10) ? '0' + minutes : minutes;
    displaySeconds.textContent = (seconds < 10) ? '0' + seconds : seconds;
}, 1000);




document.addEventListener("DOMContentLoaded", function() {
    const speedRange = document.getElementById("speedRange");
    const speedValue = document.getElementById("speedValue");
    const distance = document.getElementById("distance");
    const tarif = document.getElementById("tarif");

    let currentSpeed = 0;
    let distanceCovered = 0;
    let intervalId;

    speedRange.addEventListener("input", function() {
        currentSpeed = parseInt(speedRange.value);
        speedValue.textContent = currentSpeed;
        checkSpeedIndicator();
    });

    speedRange.addEventListener("change", function() {
        if (intervalId) {
            clearInterval(intervalId);
        }
        intervalId = setInterval(updateDistance, 1000); // Mettre à jour toutes les secondes
    });

    function updateDistance() {
        distanceCovered += currentSpeed / 3600; // Conversion de km/h en km/s
        distance.textContent = distanceCovered.toFixed(1); // Affichage à 2 décimales

        checkSpeedIndicator();
    }

    function checkSpeedIndicator() {
        const speed = parseInt(speedValue.textContent);
        if (speed === 0) { // Si la vitesse est nulle
            document.getElementById('un').style.backgroundColor = 'green';
            document.getElementById('un').classList.add('clignotant-animation');
            document.getElementById('quatre').style.backgroundColor = 'green';
            document.getElementById('quatre').classList.add('clignotant-animation');
            document.getElementById('six').style.backgroundColor = 'black';
            document.getElementById('six').classList.remove('clignotant-animation');
            document.getElementById('quatre').style.backgroundColor = 'green';
            document.getElementById('quatre').classList.add('clignotant-animation');
            document.getElementById('speedIndicator').style.backgroundColor = 'black';
            document.getElementById('speedIndicator').classList.remove('clignotant-animation');
            document.getElementById('distanceIndicator').style.backgroundColor = 'black';
            document.getElementById('distanceIndicator').classList.remove('clignotant-animation');
            document.getElementById('tarif').style.backgroundColor = 'green';
            document.getElementById('tarif').classList.add('clignotant-animation');
        } else if (speed < 36) { // Si la vitesse est inferieur à 36
            document.getElementById('un').style.backgroundColor = 'green';
            document.getElementById('un').classList.add('clignotant-animation');
            document.getElementById('quatre').style.backgroundColor = 'green';
            document.getElementById('quatre').classList.add('clignotant-animation');
            document.getElementById('six').style.backgroundColor = 'red';
            document.getElementById('six').classList.add('clignotant-animation');
            document.getElementById('speedIndicator').style.backgroundColor = 'red';
            document.getElementById('speedIndicator').classList.add('clignotant-animation');
            document.getElementById('distanceIndicator').style.backgroundColor = 'green';
            document.getElementById('distanceIndicator').classList.add('clignotant-animation');
            document.getElementById('tarif').style.backgroundColor = 'green';
            document.getElementById('tarif').classList.add('clignotant-animation');
        } else if (speed > 36) { // Si la vitesse est supérieure à 36
            document.getElementById('un').style.backgroundColor = 'green';
            document.getElementById('un').classList.add('clignotant-animation');
            document.getElementById('quatre').style.backgroundColor = 'red';
            document.getElementById('quatre').classList.add('clignotant-animation');
            document.getElementById('six').style.backgroundColor = 'green';
            document.getElementById('six').classList.add('clignotant-animation');
            document.getElementById('tarif').style.backgroundColor = 'green';
            document.getElementById('tarif').classList.add('clignotant-animation');
            document.getElementById('speedIndicator').style.backgroundColor = 'green';
            document.getElementById('speedIndicator').classList.add('clignotant-animation');
            document.getElementById('distanceIndicator').style.backgroundColor = 'green';
            document.getElementById('distanceIndicator').classList.add('clignotant-animation');
        } else {
            document.getElementById('un').style.backgroundColor = 'black';
            document.getElementById('un').classList.remove('clignotant-animation');
            document.getElementById('tarif').style.backgroundColor = 'black';
            document.getElementById('tarif').classList.remove('clignotant-animation');
        }

    }

});


function startTimer() {
    window.location.reload(false);
}

function stopTimer() {

    let counTime = hours + ' : ' + minutes + ' : ' + seconds;
    clearInterval(intervalId);
    clearInterval(secondIndicatorInterval);
    document.getElementById('distanceIndicator').style.backgroundColor = 'black';
    document.getElementById('distanceIndicator').classList.remove('clignotant-animation');
    document.getElementById('secondIndicator').style.backgroundColor = 'black';
    document.getElementById('secondIndicator').classList.remove('clignotant-animation');
    document.getElementById('speedIndicator').style.backgroundColor = 'black';
    document.getElementById('speedIndicator').classList.remove('clignotant-animation');
    document.getElementById('un').style.backgroundColor = 'black';
    document.getElementById('un').classList.remove('clignotant-animation');
    document.getElementById('six').style.backgroundColor = 'black';
    document.getElementById('six').classList.remove('clignotant-animation');
    document.getElementById('quatre').style.backgroundColor = 'black';
    document.getElementById('quatre').classList.remove('clignotant-animation');
    document.getElementById('tarif').style.backgroundColor = 'black';
    document.getElementById('tarif').classList.remove('clignotant-animation');
}

function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    // Ajoute un zéro devant si les minutes/secondes sont inférieures à 10
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;

    let timeString = hour + ' : ' + minute + ' : ' + second;

    document.getElementById('time').textContent = timeString;
}

function updateSecondIndicator() {
    document.getElementById('secondIndicator').style.backgroundColor = 'green';
    setTimeout(() => {
        document.getElementById('secondIndicator').style.backgroundColor = 'transparent';
    }, 500);

}
