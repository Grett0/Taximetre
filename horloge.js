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

function old () {
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
  compteur2 + 1;
  alert(compteur2);
}

function moins() {
  compteur2 - 1;
  alert(compteur2);
}

function test() {
  let compteur2 = compteur;
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
  document.getElementById('time2').textContent = counTime;
  clearInterval(intervalId);
  clearInterval(secondIndicatorInterval);
  clearInterval(speedIndicatorInterval);
  clearInterval(distanceIndicatorInterval);
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
