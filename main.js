const playBtn = document.getElementById('play-btn');
const overlay = document.getElementById('popup-overlay');
const closeBtn = document.getElementById('close-btn');

playBtn.addEventListener('click', () => {
  overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('active');
});

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.classList.remove('active');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    overlay.classList.remove('active');
  }
});
