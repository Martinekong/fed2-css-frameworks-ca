const newestBtn = document.getElementById('newest');
const oldestBtn = document.getElementById('oldest');
const feedContainer = document.getElementById('feed-container');
const cards = Array.from(feedContainer.children);

let isActive = true;

newestBtn.addEventListener('click', () => {
  if (!isActive) {
    newestBtn.classList.add('border-b-2');
    oldestBtn.classList.remove('border-b-2');
    cards.reverse().forEach((card) => feedContainer.appendChild(card));
    isActive = true;
  }
});

oldestBtn.addEventListener('click', () => {
  if (isActive) {
    newestBtn.classList.remove('border-b-2');
    oldestBtn.classList.add('border-b-2');
    cards.reverse().forEach((card) => feedContainer.appendChild(card));
    isActive = false;
  }
});
