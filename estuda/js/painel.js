function iniciarPainel() {
  try {
    if (sessionStorage.getItem(demo.sessao) === 'ativa') return true;
  } catch {
    // O login exibe uma mensagem quando o armazenamento está indisponível.
  }
  location.replace('login.html' + consultaTrilha);
  return false;
}

if (iniciarPainel()) configurarPainel();

function configurarPainel() {
  const todasLicoes = trilhas.flatMap(trilha => trilha.licoes);
  const concluidas = carregarProgresso(todasLicoes);
  const lista = document.querySelector('#lista');
  const filtros = document.querySelector('#filtros');
  const progresso = document.querySelector('#progresso');
  const status = document.querySelector('#status');
  const dialogo = document.querySelector('#licao');
  const concluir = document.querySelector('#concluir');
  let filtroAtivo = trilhaInicial?.id ?? 'todas';
  let licaoAtiva;
  let botaoDeOrigem;

  document.querySelector('#painel').hidden = false;
  const sair = document.querySelector('#sair');
  sair.hidden = false;
  sair.addEventListener('click', () => {
    sessionStorage.removeItem(demo.sessao);
    location.replace('login.html');
  });

  window.addEventListener('pageshow', event => {
    if (event.persisted && iniciarPainel()) location.reload();
  });

  for (const opcao of [{ id: 'todas', nome: 'Todas' }, ...trilhas]) {
    const botao = document.createElement('button');
    botao.type = 'button';
    botao.textContent = opcao.nome;
    botao.dataset.filtro = opcao.id;
    botao.addEventListener('click', () => {
      filtroAtivo = opcao.id;
      renderizar();
    });
    filtros.append(botao);
  }

  function renderizar() {
    progresso.max = todasLicoes.length;
    progresso.value = concluidas.size;
    document.querySelector('#total').textContent = concluidas.size + ' de ' + todasLicoes.length;
    for (const botao of filtros.children) {
      botao.setAttribute('aria-pressed', String(botao.dataset.filtro === filtroAtivo));
    }

    lista.replaceChildren();
    for (const trilha of trilhas.filter(item => filtroAtivo === 'todas' || item.id === filtroAtivo)) {
      const cartao = document.createElement('article');
      cartao.className = 'cartao';
      const quantidade = trilha.licoes.filter(licao => concluidas.has(licao.id)).length;
      // Os campos do cartão vêm exclusivamente do catálogo fixo em dados.js.
      cartao.innerHTML = '<span class="icone ' + trilha.cor + '" aria-hidden="true">' +
        trilha.simbolo + '</span><h3>' + trilha.nome + '</h3><p>' + quantidade +
        '/' + trilha.licoes.length + ' concluídas</p>';

      for (const licao of trilha.licoes) {
        const botao = document.createElement('button');
        botao.type = 'button';
        botao.className = 'item-licao';
        botao.dataset.licao = licao.id;
        botao.textContent = (concluidas.has(licao.id) ? '✓ ' : '') + licao.titulo;
        botao.setAttribute('aria-label', licao.titulo + (concluidas.has(licao.id) ? ', concluída' : ''));
        botao.addEventListener('click', () => {
          botaoDeOrigem = botao;
          licaoAtiva = licao;
          document.querySelector('#materia-licao').textContent = trilha.nome;
          document.querySelector('#titulo-licao').textContent = licao.titulo;
          document.querySelector('#texto-licao').textContent = licao.texto;
          document.querySelector('#exemplo-licao').textContent = licao.exemplo;
          concluir.textContent = concluidas.has(licao.id) ? 'Marcar como pendente' : 'Marcar como concluída';
          dialogo.showModal();
        });
        cartao.append(botao);
      }
      lista.append(cartao);
    }
  }

  concluir.addEventListener('click', () => {
    const estavaConcluida = concluidas.delete(licaoAtiva.id);
    if (!estavaConcluida) concluidas.add(licaoAtiva.id);
    dialogo.close();
    renderizar();
    try {
      localStorage.setItem(demo.progresso, JSON.stringify([...concluidas]));
      status.textContent = estavaConcluida ? 'Lição marcada como pendente.' : 'Lição concluída. Progresso salvo.';
    } catch {
      status.textContent = 'Progresso atualizado nesta página. O navegador bloqueou o salvamento.';
    }
  });

  dialogo.addEventListener('close', () => {
    lista.querySelector('[data-licao="' + botaoDeOrigem.dataset.licao + '"]')?.focus();
  });

  renderizar();
}

function carregarProgresso(licoes) {
  try {
    const ids = JSON.parse(localStorage.getItem(demo.progresso) ?? '[]');
    if (Array.isArray(ids)) return new Set(ids.filter(id => licoes.some(licao => licao.id === id)));
  } catch {
    // Dados ausentes, indisponíveis ou inválidos começam com progresso vazio.
  }
  return new Set();
}
