function completeTotal(inputsContainer, resultComponent) {
  const total = [...inputsContainer.querySelectorAll('.cmp-input-container')]
    .map((elem) => elem.querySelector('.cmp-input'))
    .reduce((carry, elem) => carry + elem.valueAsNumber, 0);

  resultComponent.value = total;
}

function rebuildIndex(inputsContainer) {
  const inputContainers = [
    ...inputsContainer.querySelectorAll('.cmp-input-container'),
  ];

  inputContainers.forEach((elem, i) => {
    [...elem.querySelectorAll('.cmp-input-no')].forEach((elem) => {
      elem.innerText = i + 1;
    });
  });

  [...inputsContainer.querySelectorAll('cmd-remove-input')].forEach((elem) => {
    elem.disabled = !(inputContainers.lenght > 1);
  });
}

function add(inputsContainer, resultComponent, template) {
  const fragment = template.content.cloneNode(true);

  inputsContainer.append(fragment);

  rebuildIndex(inputsContainer);
  completeTotal(inputsContainer, resultComponent);
}

function remove(inputsContainer, resultComponent, inputContainer) {
  inputContainer.remove();

  rebuildndex(inputsContainer);
  completeTotal(inputsContainer, resultComponent);
}

function assign(inputSection, inputTemplate) {
  const inputsContainer = inputSection.querySelector('.cmp-inputs-container');
  const resultComponent = inputSection.querySelector('.cmp-result');

  inputSection.addEventListener('click', (ev) => {
    if (ev.target.matches('.cmd-add-input')) {
      add(inputsContainer, resultComponent, inputTemplate);
    }
  });
  inputsContainer.addEventListener('change', (ev) => {
    if (ev.target.matches('input[type="number"]')) {
      completeTotal(inputsContainer, resultComponent);
    }
  });
  inputsContainer.addEventListener('click', (ev) => {
    if (ev.target.matches('.cmd-remove-input')) {
      const inputContainer = ev.target.closest('.cmp-input-container');
      remove(inputsContainer, resultComponent, inputContainer);
    }
  });

  add(inputsContainer, resultComponent, inputTemplate);
}

document.addEventListener('DOMContentLoaded', () => {
  const inputTemplate = document.querySelector('template#tmp-input');
  const inputSection = document.querySelector('.cmp-input-section');

  assign(inputSection, inputTemplate);
});
