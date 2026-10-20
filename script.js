const params = new URLSearchParams(window.location.search);
const rawName = params.get('name') ?? params.get('ten') ?? params.get('to') ?? '';
const name = rawName.trim().replace(/\s+/g, ' ').slice(0, 40) || 'em';
for (const id of ['heroName', 'envelopeName', 'letterName']) document.getElementById(id).textContent = name;
document.title = `Một lá thư gửi ${name} · 20/10`;
const experience = document.querySelector('.experience');
const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');
const surprise = document.getElementById('surprise');
const surpriseButton = document.getElementById('surpriseButton');
const closeSurprise = document.getElementById('closeSurprise');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function showerPetals(count) {
  if (reduceMotion) return;
  for (let i = 0; i < count; i += 1) {
    const petal = document.createElement('span');
    petal.className = 'petal';
    petal.style.left = `${Math.random() * 100}vw`;
    petal.style.setProperty('--drift', `${(Math.random() - .5) * 240}px`);
    petal.style.setProperty('--duration', `${3 + Math.random() * 3}s`);
    petal.style.animationDelay = `${Math.random() * 1.2}s`;
    petal.style.background = ['#e7a0ac', '#e9bdba', '#d88b9a', '#f0c9c1'][i % 4];
    document.body.appendChild(petal);
    petal.addEventListener('animationend', () => petal.remove(), { once: true });
  }
}
envelope.addEventListener('click', () => {
  if (experience.classList.contains('opened')) return;
  experience.classList.add('opened');
  envelope.setAttribute('aria-expanded', 'true');
  letter.setAttribute('aria-hidden', 'false');
  showerPetals(28);
  window.setTimeout(() => surpriseButton.focus({ preventScroll: true }), reduceMotion ? 20 : 1150);
});
function showSurprise() {
  surprise.classList.add('visible');
  surprise.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  closeSurprise.focus();
  showerPetals(25);
}
function hideSurprise() {
  surprise.classList.remove('visible');
  surprise.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  surpriseButton.focus();
}
surpriseButton.addEventListener('click', showSurprise);
closeSurprise.addEventListener('click', hideSurprise);
document.getElementById('surpriseBackdrop').addEventListener('click', hideSurprise);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && surprise.classList.contains('visible')) hideSurprise();
  if (event.key === 'Tab' && surprise.classList.contains('visible')) {
    event.preventDefault();
    closeSurprise.focus();
  }
});
