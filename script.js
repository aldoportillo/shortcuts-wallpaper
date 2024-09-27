const bgColorPicker = document.getElementById('bgColorPicker');
const textColorPicker = document.getElementById('textColorPicker');
const accentColorPicker = document.getElementById('accentColorPicker');
const toggleBtn = document.getElementById('toggleColorSettings');
const colorSettings = document.getElementById('colorSettings');
const resetBtn = document.getElementById('resetColors');

document.addEventListener('DOMContentLoaded', () => {
  const savedBgColor = localStorage.getItem('bgColor');
  const savedTextColor = localStorage.getItem('textColor');
  const savedAccentColor = localStorage.getItem('accentColor');

  if (savedBgColor) {
    document.body.style.backgroundColor = savedBgColor;
    bgColorPicker.value = savedBgColor;
  }
  if (savedTextColor) {
    document.body.style.color = savedTextColor;
    textColorPicker.value = savedTextColor;
  }
  if (savedAccentColor) {
    updateAccentColor(savedAccentColor);
    accentColorPicker.value = savedAccentColor;
  }
});

toggleBtn.addEventListener('click', () => {
  if (colorSettings.style.display === 'none' || colorSettings.style.display === '') {
    colorSettings.style.display = 'block';
    toggleBtn.textContent = 'Hide Color Settings';
  } else {
    colorSettings.style.display = 'none';
    toggleBtn.textContent = 'Show Color Settings';
  }
});

bgColorPicker.addEventListener('input', (event) => {
  localStorage.setItem('bgColor', event.target.value);
  location.reload(); 
});

textColorPicker.addEventListener('input', (event) => {
  localStorage.setItem('textColor', event.target.value);
  location.reload();
});

accentColorPicker.addEventListener('input', (event) => {
  localStorage.setItem('accentColor', event.target.value);
  location.reload(); 
});

resetBtn.addEventListener('click', () => {
  localStorage.removeItem('bgColor');
  localStorage.removeItem('textColor');
  localStorage.removeItem('accentColor');
  location.reload(); 
});

function updateAccentColor(color) {
  document.querySelectorAll('h3, li, kbd').forEach(element => {
    element.style.color = color;
  });
  document.querySelectorAll('li').forEach(element => {
    element.style.borderLeftColor = color;
  });
}
