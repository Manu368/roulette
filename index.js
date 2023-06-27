// Get the necessary DOM elements
const numbers = document.querySelectorAll('th[data-number]');
const startButton = document.getElementById('playbutton');
const resultElement = document.getElementById('manu');

let selectedNumber; // Track the user-selected number

// Add click event listeners to the number elements
numbers.forEach(number => {
  number.addEventListener('click', () => {
    // Remove the previous selection if any
    numbers.forEach(number => number.classList.remove('selected'));

    // Store the selected number
    selectedNumber = number.textContent;
    number.classList.add('selected'); // Highlight the selected number
    console.log('Selected Number:', selectedNumber);
  });
});

// Add click event listener to the start button
startButton.addEventListener('click', () => {
  // Check if a number is selected
  if (selectedNumber !== null) {
    // Start the animations
    document.getElementById('wheel').classList.add('wheel-animation');
    document.getElementById('ball').classList.add('ball-animation');

    // Wait for 5 seconds and then stop the animations
    setTimeout(() => {
      document.getElementById('wheel').classList.remove('wheel-animation');
      document.getElementById('ball').classList.remove('ball-animation');

      // Get the final number on the wheel
      const finalNumber = Math.floor(Math.random() * 37);
      console.log('Final Number:', finalNumber);

      // Check if the final number matches the selected number
      if (finalNumber === selectedNumber) {
        resultElement.textContent = 'You win!';
      } else {
        resultElement.textContent = 'You lose!';
      }
    }, 5000);
  } else {
    console.log('Please select a number first!');
  }
});
