function startCountdown() {
	const startingPosition = document.getElementById("startPosition").value;
	
	if (startingPosition < 1) {
		alert("Starting position must be greater than or equal to 1.");
		return;
	};

	let countdownValue = startingPosition;
	document.getElementById("countdown").innerHTML = countdownValue;

	let countdownInterval = setInterval(() => {
	  countdownValue--;
	  document.getElementById("countdown").innerHTML = countdownValue;
			if (countdownValue === 0) {
				clearInterval(countdownInterval);
			}
	}, 1000);
}


