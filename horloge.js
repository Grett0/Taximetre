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
setInterval(updateClock, 1000);

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
  secondIndicatorInterval = setInterval(updateSecondIndicator, 1000);
  var displayHours = document.getElementById('hours');
  var displayMinutes = document.getElementById('minutes');
  var displaySeconds = document.getElementById('seconds');

  var hours = 0;
  var minutes = 0;
  var seconds = 0;

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
  clearInterval(intervalId);
  clearInterval(secondIndicatorInterval);
  clearInterval(speedIndicatorInterval);
  clearInterval(distanceIndicatorInterval);
}

function updateClock() {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();

  // Ajoute un zéro devant si les minutes/secondes sont inférieures à 10
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;

  var timeString = hour + ' : ' + minute + ' : ' + second;

  document.getElementById('clock').textContent = timeString;
}

function updateSecondIndicator() {
  document.getElementById('secondIndicator').style.backgroundColor = 'green';
  setTimeout(() => {
    document.getElementById('secondIndicator').style.backgroundColor = 'transparent';
  }, 500);
  tempsCounter++;
  document.getElementById('tempsCounter').innerText = tempsCounter;
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
