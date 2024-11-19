



'use strict'; // Включение строгого режима в JavaScript

const container = document.querySelector('.place'); // Получение элемента контейнера для вставки новых элементов

const saveOutput = document.querySelector('.save-output'); // Элемент для вывода сохраненных значений

const inputText = document.querySelector('.input-text'); // Получение текстового поля ввода
const inputNumber = document.querySelector('.input-number'); // Получение числового поля ввода

const addBtn = document.querySelector('.add-element'); // Кнопка для добавления новых полей
const saveBtn = document.querySelector('.save-element'); // Кнопка для сохранения значений

// Шаблон HTML для нового элемента ввода
const addInput = `
  <div class="input-container">
    <input class="input-text" type="text"><input class="input-number" min="1" type="number"><button class="btn remove-btn">x</button><button class="btn up-btn">&uarr;</button><button class="btn down-btn">&darr;</button>
  </div>  
`;

// Обработчик события на кнопку добавления нового элемента

addBtn.addEventListener('click', (event) => {

  
  container.insertAdjacentHTML('afterbegin', addInput); // Добавление нового элемента в контейнер

  const removeBtn = document.querySelector('.remove-btn'); // Получение кнопки удаления
  const upBtn = document.querySelector('.up-btn'); // Получение кнопки перемещения вверх
  const downBtn = document.querySelector('.down-btn'); // Получение кнопки перемещения вниз

  // Обработчик события на кнопку удаления
  removeBtn.addEventListener('click', (e) => {
    const parent = e.target.closest('.input-container'); // Поиск родительского контейнера
    parent.remove(); // Удаление контейнера
  });

  // Обработчик события на кнопку перемещения вниз
  downBtn.addEventListener("click", (e) => {
    const parent = e.target.closest('.input-container'); // Поиск родительского контейнера
    
    if (parent) { 
      const nextElement = parent.nextElementSibling; // Получение следующего элемента
      if (nextElement) { 
          parent.parentNode.insertBefore(nextElement, parent); // Перемещение вниз
      }
    }
  });

  // Обработчик события на кнопку перемещения вверх
  upBtn.addEventListener("click", (e) => {
    const parent = e.target.closest('.input-container'); // Поиск родительского контейнера

    if (parent) { 
      const previousElement = parent.previousElementSibling; // Получение предыдущего элемента
      if (previousElement) { 
          parent.parentNode.insertBefore(parent, previousElement); // Перемещение вверх
      }
    }
  });
});

// Обработчик события на кнопку сохранения значений
saveBtn.addEventListener('click', () => {
  const inputContains = document.querySelectorAll('.input-container'); // Получение всех элементов ввода
  const inputValues = []; // Массив для хранения значений

  // Перебор всех контейнеров ввода
  inputContains.forEach(container => {
    const textInput = container.querySelector('.input-text'); // Получение текстового поля
    const numberInput = container.querySelector('.input-number'); // Получение числового поля

    if (textInput && numberInput) {
      inputValues.push({
          text: textInput.value,   // Сохранение текста
          number: numberInput.value // Сохранение числа
      });
    }
  });

  saveOutput.innerHTML = ''; // Очистка вывода

  // Формирование строки для вывода значений
  const outputString = inputValues.map(input => `"${input.text}":"${input.number}"`).join(',');

  const paragraph = document.createElement('p'); // Создание нового параграфа для вывода
  paragraph.textContent = outputString; // Установка текста параграфа
  saveOutput.appendChild(paragraph); // Добавление параграфа в вывод
});










