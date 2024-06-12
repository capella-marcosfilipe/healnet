document.querySelector('.submitBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do botão de submit
    var primeiroNome = document.querySelector('.primeiroNome').value;
    var email = document.querySelector('.email').value;

    if (primeiroNome === '' || email === '') {
      alert('Por favor, preencha todos os campos!');
    } else {
      alert('Formulário enviado com sucesso!');
    }
  });