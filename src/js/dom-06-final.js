import { assign as assignInput } from './input1.js';

document.addEventListener('DOMContentLoaded', () => {
  const inputTemplate = document.querySelector('template#tmp-input');
  const inputSection = document.querySelector('.cmp-input-section');

  assignInput(inputSection, inputTemplate);
});
