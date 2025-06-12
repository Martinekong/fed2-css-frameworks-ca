const newestBtn = document.getElementById('newest');
const oldestBtn = document.getElementById('oldest');
const feedContainer = document.getElementById('feed-container');
const cards = Array.from(feedContainer.children);
const createPostBtn = document.getElementById('create-post-btn');
const createPostModal = document.getElementById('create-post-modal');
const postBtn = document.getElementById('post-btn');

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

createPostBtn.addEventListener('click', () => {
  createPostModal.classList.remove('hidden');
  createPostModal.classList.add('flex');
});

postBtn.addEventListener('click', () => {
  createPostModal.classList.remove('flex');
  createPostModal.classList.add('hidden');
});

createPostModal.addEventListener('click', (event) => {
  if (event.target === createPostModal) {
    createPostModal.classList.remove('flex');
    createPostModal.classList.add('hidden');
  }
});
