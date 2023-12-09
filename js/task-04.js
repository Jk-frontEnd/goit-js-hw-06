  let counterValue = 0;

  const decrementButton = document.querySelector('[data-action="decrement"]');
  const incrementButton = document.querySelector('[data-action="increment"]');
  const value = document.getElementById('value');

  decrementButton.addEventListener('click', () => {
    counterValue -= 1;
    value.textContent = counterValue;
  });

  incrementButton.addEventListener('click', () => {
    counterValue += 1;
    value.textContent = counterValue;
  });