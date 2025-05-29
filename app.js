const difficultySelect = document.querySelector('.difficulty-select');
const easyList = document.getElementById('easy');
const hardList = document.getElementById('hard');

// Тексты для прайса
const easyText = `Бот в телеграмме - 1.2$\n\nБоты в дискорде - 1$\n\nСайты-1.5$\n\nСайты-2$`;
const hardText = `Мини аппы в боте - 2.4-2.6$\n\nСайты-2$\n\nБоты в дискорде - 1.5$\n\nБот в телеграмме - 1.5$`;

// Скрываем оба прайса при старте
easyList.style.display = 'none';
hardList.style.display = 'none';

function animateText(element, text) {
  element.innerHTML = '';
  setTimeout(() => {
    element.innerHTML = text
      .split('\n')
      .map((line) =>
        line.trim() ? `<div class="price-line">${line}</div>` : `<div style="height:0.5em"></div>`,
      )
      .join('');
    element.classList.add('active');
  }, 100);
}

function updatePriceList() {
  easyList.classList.remove('active');
  hardList.classList.remove('active');
  easyList.style.display = 'none';
  hardList.style.display = 'none';

  if (difficultySelect.value === 'easy') {
    animateText(easyList, easyText);
    easyList.style.display = 'block';
    hardList.style.display = 'none';
  } else {
    animateText(hardList, hardText);
    hardList.style.display = 'block';
    easyList.style.display = 'none';
  }
}

// Кнопка Telegram
function openTelegram() {
  window.open('https://t.me/helloxszets', '_blank');
}

// Показать легкий прайс по умолчанию
updatePriceList();
