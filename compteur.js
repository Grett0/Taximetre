document.addEventListener("DOMContentLoaded", function() {
    const speedRange = document.getElementById("speedRange");
    const speedValue = document.getElementById("speedValue");
    const distance = document.getElementById("distance");

    let currentSpeed = 0;
    let distanceCovered = 0;
    let intervalId;

    speedRange.addEventListener("input", function() {
        currentSpeed = parseInt(speedRange.value);
        speedValue.textContent = currentSpeed;
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
    }
});
