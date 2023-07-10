// Отримання кнопки та повідомлення
const toggleBtn = document.getElementById('toggleBtn');
const message = document.getElementById('message');

// Функція для зміни стану кнопки та фону сторінки
function toggleButton() {
  const isButtonOn = toggleBtn.textContent === 'Turn off'; // Перевірка поточного стану кнопки

  if (isButtonOn) {
    // Вимикання
    toggleBtn.textContent = 'Turn on';
    document.body.style.backgroundColor = '#111'; // Темний фон
    const lastTurnOff = new Date().toLocaleString();
    message.textContent = `Last turn off: ${lastTurnOff}`;
    localStorage.setItem('buttonState', 'off');
    localStorage.setItem('lastTurnOff', lastTurnOff);
  } else {
    // Увімкнення
    toggleBtn.textContent = 'Turn off';
    document.body.style.backgroundColor = '#f5f5f5'; // Світлий фон
    const lastTurnOn = new Date().toLocaleString();
    message.textContent = `Last turn on: ${lastTurnOn}`;
    localStorage.setItem('buttonState', 'on');
    localStorage.setItem('lastTurnOn', lastTurnOn);
  }
}

// Перевірка попереднього стану кнопки та фону сторінки при завантаженні
const buttonState = localStorage.getItem('buttonState');
if (buttonState === 'off') {
  toggleButton(); // Увімкнення початкового стану
} else {
  const lastTurnOn = localStorage.getItem('lastTurnOn');
  message.textContent = `Last turn on: ${lastTurnOn}`; // Відображення останньої зміни
}

// Додавання обробника події на клік кнопки
toggleBtn.addEventListener('click', toggleButton);