document.addEventListener('DOMContentLoaded', () => {
    const titulos = document.querySelectorAll('.servico-titulo');

    titulos.forEach(titulo => {
      titulo.addEventListener('click', () => {
        titulo.classList.toggle('clicked');
      });
    });
  });