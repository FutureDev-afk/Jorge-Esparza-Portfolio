const rotateExpandText = document.querySelector('.rotate-expand-text');

rotateExpandText.addEventListener('mouseover', () => {
  rotateExpandText.classList.add('expanded');
});

rotateExpandText.addEventListener('mouseout', () => {
  rotateExpandText.classList.remove('expanded');
});

const expandText = document.querySelector('.expand-text');

expandText.addEventListener('mouseover', () => {
  expandText.classList.add('expanded');
});

expandText.addEventListener('mouseout', () => {
  expandText.classList.remove('expanded');
});