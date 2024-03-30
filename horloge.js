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
        distance.textContent = distanceCovered.toFixed(2); // Affichage à 2 décimales

        checkSpeedIndicator();
    }

    function checkSpeedIndicator() {
        const speed = parseInt(speedValue.textContent);
        if (speed === 0) {
            document.getElementById('quatre').style.backgroundColor = 'black';
            document.getElementById('quatre').classList.remove('clignotant-animation');
            document.getElementById('speedIndicator').style.backgroundColor = 'black';
            document.getElementById('speedIndicator').classList.remove('clignotant-animation');
            document.getElementById('distanceIndicator').style.backgroundColor = 'black';
            document.getElementById('distanceIndicator').classList.remove('clignotant-animation');
            document.getElementById('tarif').style.backgroundColor = 'black';
            document.getElementById('tarif').classList.remove('clignotant-animation');
        } else if (speed > 36) {
            document.getElementById('tarif').style.backgroundColor = 'green';
            document.getElementById('tarif').classList.add('clignotant-animation');
            document.getElementById('speedIndicator').style.backgroundColor = 'green';
            document.getElementById('speedIndicator').classList.add('clignotant-animation');
            document.getElementById('distanceIndicator').style.backgroundColor = 'green';
            document.getElementById('distanceIndicator').classList.add('clignotant-animation');
        } else if (speed < 36) {
            document.getElementById('speedIndicator').style.backgroundColor = 'red';
            document.getElementById('speedIndicator').classList.add('clignotant-animation');
            document.getElementById('distanceIndicator').style.backgroundColor = 'red';
            document.getElementById('distanceIndicator').classList.add('clignotant-animation');
        } else {
            document.getElementById('speedIndicator').style.backgroundColor = 'transparent';
            document.getElementById('speedIndicator').classList.remove('clignotant-animation');
        }
    }

});

let vInst = 0;
let dParc = 0;
let time;
let tdist = 0.10;
let tHour = 36;
let vConj = 36;
let hz = 16.65;
let impul = 2000;
let t1 = 0;
let t2 = 0;
let tTotal = 0;
let time2;

function old() {
    let intervalId;
    let compteur = 3;
    let compteur2 = 0;

    let slider = document.getElementById("range");
    let output = document.getElementById("compteur");

    if (range == 36) {
        console.log('36')
    };
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
    }

    let inputElement = document.getElementById('textInput');
    let clignotantElement = document.getElementById('un');

    inputElement.addEventListener('input', function() {
        let inputValue = inputElement.value;
        clignotantElement.textContent = inputValue;

        if (inputValue === 'noir') {
            clignotantElement.className = 'texte-clignotant clignotant-noir clignotant-animation';
        } else if (inputValue === '┃') {
            clignotantElement.className = 'texte-clignotant clignotant-vert clignotant-animation';
        } else if (inputValue === 'rouge') {
            clignotantElement.className = 'texte-clignotant clignotant-rouge clignotant-animation';
        } else {
            // Réinitialiser les classes si l'entrée ne correspond à aucune des couleurs
            clignotantElement.className = 'texte-clignotant';
        }
    });

    // Mettre à jour l'horloge chaque seconde
}

function plus() {
    compteur2++;
    alert(compteur2);
}

function moins() {
    compteur2 - 1;
    alert(compteur2);
}

function test() {
    compteur2 = range;
    alert(compteur2);
}

function startTimer() {


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

function increaseSpeed() {
    vitesseCounter++;
    document.getElementById('vitesseCounter').innerText = vitesseCounter;
    checkSpeedIndicator();
}

function decreaseSpeed() {
    if (vitesseCounter > 0) {
        vitesseCounter--;
        document.getElementById('vitesseCounter').innerText = vitesseCounter;
        checkSpeedIndicator();
    }
}

function checkSpeedIndicator() {
    if (vitesseCounter > 36) {
        document.getElementById('speedIndicator').style.backgroundColor = 'green';
    } else if (vitesseCounter > 0) {
        document.getElementById('speedIndicator').style.backgroundColor = 'red';
    } else {
        document.getElementById('speedIndicator').style.backgroundColor = 'white';
    }
}
