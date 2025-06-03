const menu = document.getElementById('mobile-menu');
const openMenubtn = document.getElementById('menu-open');
const closeMenuBtn = document.getElementById('menu-close');

const themeToggleBtn = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

// Hamburger menu
openMenubtn.addEventListener('click', () => {
  menu.classList.remove('hidden');
  openMenubtn.classList.add('hidden');
});

closeMenuBtn.addEventListener('click', () => {
  menu.classList.add('hidden');
  openMenubtn.classList.remove('hidden');
});

// Dark/light mode toggel
function applyInitialTheme() {
  const userPreference = localStorage.getItem('theme');

  const systemPreferenceIsDark = window.matchMedia(
    'prefers-color-scheme: dark'
  ).matches;

  const isDarkMode =
    userPreference === 'dark' || (!userPreference && systemPreferenceIsDark);

  document.documentElement.classList.toggle('dark', isDarkMode);

  sunIcon.classList.toggle('hidden', isDarkMode);
  moonIcon.classList.toggle('hidden', !isDarkMode);
}

applyInitialTheme();

function toggleTheme() {
  const isDarkMode = document.documentElement.classList.toggle('dark');

  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

  sunIcon.classList.toggle('hidden', isDarkMode);
  moonIcon.classList.toggle('hidden', !isDarkMode);
}

themeToggleBtn.addEventListener('click', toggleTheme);
