import { materialReady, setMaterialIntensity, setMaterialMode, inspectMaterial } from '../../louis-material.js?v=16';

const body = document.body;
const panel = document.querySelector('.material-study');
const intensity = document.querySelector('#material-intensity');
const value = document.querySelector('#material-value');
const status = document.querySelector('#material-status');
const buttons = [...document.querySelectorAll('[data-material-choice]')];

function apply() {
  setMaterialIntensity(intensity.value);
  value.value = `${intensity.value}%`;
  intensity.disabled = body.dataset.materialMode !== 'print';
  buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.materialChoice === body.dataset.materialMode)));
}

buttons.forEach(button => button.addEventListener('click', () => {
  setMaterialMode(button.dataset.materialChoice);
  apply();
}));
intensity.addEventListener('input', apply);
apply();

materialReady.then(loaded => {
  if (!loaded) status.textContent = '材质未载入，当前保留原始字色。';
});

// Keep the demo controls out of the small-screen composition until requested.
if (matchMedia('(max-width: 600px)').matches) panel.open = false;
window.__louisMaterialDemo = {
  inspect: inspectMaterial,
};
