// Отримання кнопки та повідомлення
const toggleBtn = document.getElementById('toggleBtn');
const message = document.getElementById('message');

// Функція для зміни стану кнопки та фону сторінки
function toggleButton() {
  const isDarkMode = document.body.classList.contains('dark-background'); // Перевірка поточного стану фону

  if (isDarkMode) {
    // Вимикання
    toggleBtn.textContent = 'Turn on';
    document.body.classList.remove('dark-background'); // Видалення класу для темного фону
    const lastTurnOff = new Date().toLocaleString();
    message.textContent = `Last turn off: ${lastTurnOff}`;
    localStorage.setItem('buttonState', 'off');
    localStorage.setItem('lastTurnOff', lastTurnOff);
  } else {
    // Увімкнення
    toggleBtn.textContent = 'Turn off';
    document.body.classList.add('dark-background'); // Додавання класу для темного фону
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
  if (lastTurnOn === null) {
    message.textContent = ``;
  }else {
    message.textContent = `Last turn on: ${lastTurnOn}`; // Відображення останньої зміни
  }
}

// Додавання обробника події на клік кнопки
toggleBtn.addEventListener('click', toggleButton);