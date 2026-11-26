const formulario = document.querySelector('#login');
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const erro = document.querySelector('#erro');
const alternar = document.querySelector('#alternar');

document.querySelector('#preencher').addEventListener('click', () => {
  email.value = demo.email;
  senha.value = demo.senha;
  erro.textContent = '';
  formulario.querySelector('[type="submit"]').focus();
});

alternar.addEventListener('click', () => {
  const visivel = senha.type === 'password';
  senha.type = visivel ? 'text' : 'password';
  alternar.textContent = visivel ? 'Ocultar senha' : 'Mostrar senha';
  alternar.setAttribute('aria-pressed', String(visivel));
});

formulario.addEventListener('input', () => {
  erro.textContent = '';
});

formulario.addEventListener('submit', event => {
  event.preventDefault();
  if (email.value.trim().toLowerCase() !== demo.email || senha.value !== demo.senha) {
    erro.textContent = 'Dados incorretos. Use a opção “Preencher dados da demo”.';
    return;
  }

  try {
    sessionStorage.setItem(demo.sessao, 'ativa');
    location.assign('painel.html' + consultaTrilha);
  } catch {
    erro.textContent = 'O navegador bloqueou o armazenamento da sessão. Abra o projeto por um servidor local e permita o armazenamento.';
  }
});
