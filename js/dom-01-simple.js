document.addEventListener('DOMContentLoaded', () => {
  const inputs = [
    ...document.querySelectorAll('.cmp-inputs-container input[type="number"]'),
  ];

  inputs.forEach((element) => {
    element.addEventListener('change', () => {
      const total = inputs.reduce((carry, em) => carry + em.valueAsNumber, 0);

      document.querySelector('output.cmp-result').value = total;
    });
  });
});
