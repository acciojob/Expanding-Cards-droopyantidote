// script.js
function togglePanel(panelNumber) {
  const panels = document.querySelectorAll('.panel');
  panels.forEach(panel => {
    panel.classList.remove('active');
  });
  const panel = document.getElementById(`panel-${panelNumber}`);
  panel.classList.add('active');
}
