document.getElementById('depoimentoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nomePaciente = document.getElementById('nomePaciente').value;
    const depoimentoTexto = document.getElementById('depoimentoTexto').value;

    const novoDepoimento = document.createElement('div');
    novoDepoimento.classList.add('depoimento');
    novoDepoimento.innerHTML = `<strong>${nomePaciente}</strong><p>${depoimentoTexto}</p>`;

    document.getElementById('depoimentosContainer').appendChild(novoDepoimento);

    document.getElementById('depoimentoForm').reset();
});
