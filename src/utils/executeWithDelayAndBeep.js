function playBeep() {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // 440 Hz is the frequency of the A4 note
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.start();
  gainNode.gain.exponentialRampToValueAtTime(
    0.00005,
    audioContext.currentTime + 1
  ); // Beep lasts 1 second

  oscillator.stop(audioContext.currentTime + 1);
}

function executeWithDelayAndBeep(fn, delay = 3000, setBusy) {
  return function () {
    let state = delay / 1000;
    document.getElementById("container").classList.remove("hidden");
    document.getElementById("container").classList.add("flex");
    setBusy(true);
    const dom = document.getElementById("counter");
    dom.innerText = state;

    // Change state every second
    const intervalId = setInterval(() => {
      state -= 1;
      console.log(state);
      dom.innerText = state;
    }, 1000);

    // After 'delay' milliseconds, play beep and execute the function
    setTimeout(() => {
      clearInterval(intervalId); // Stop the state changes
      playBeep();
      setTimeout(() => {
        fn();
      }, 1000); // Execute the function 1 second after the beep starts
      document.getElementById("container").classList.add("hidden");
      document.getElementById("container").classList.remove("flex");
      setBusy(false);
    }, delay);
  };
}

export default executeWithDelayAndBeep;
