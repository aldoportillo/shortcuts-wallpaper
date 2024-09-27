const bgColorPicker = document.getElementById('bgColorPicker');
const textColorPicker = document.getElementById('textColorPicker');
const accentColorPicker = document.getElementById('accentColorPicker');
const saveButton = document.getElementById('saveButton');

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

bgColorPicker.addEventListener('input', (event) => {
  document.body.style.backgroundColor = event.target.value;
  localStorage.setItem('bgColor', event.target.value);
});

textColorPicker.addEventListener('input', (event) => {
  document.body.style.color = event.target.value;
  localStorage.setItem('textColor', event.target.value);
});

accentColorPicker.addEventListener('input', (event) => {
  const accentColor = event.target.value;
  updateAccentColor(accentColor);
  localStorage.setItem('accentColor', accentColor);
});

function updateAccentColor(color) {
  document.querySelectorAll('h3, li, kbd').forEach(element => {
    element.style.color = color;
  });
  document.querySelectorAll('li').forEach(element => {
    element.style.borderLeftColor = color;
  });
}
