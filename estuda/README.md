# Estuda

Plataforma demonstrativa de estudos em português brasileiro, feita com HTML, CSS e JavaScript. O projeto funciona com um servidor estático e dispensa instalação de dependências, compilação e conexão com serviços externos.

## Como abrir

1. Extraia o ZIP e abra um terminal na pasta estuda.
2. Com Python 3 instalado, execute:

   ```sh
   python -m http.server 8000 --bind 127.0.0.1
   ```

   Se o Windows reconhecer o Python como py, use `py -m http.server 8000 --bind 127.0.0.1`. Você também pode servir a pasta com qualquer servidor HTTP estático.
3. Acesse http://127.0.0.1:8000 no navegador. Para encerrar o servidor, pressione Ctrl+C.

Sirva as páginas pelo mesmo endereço HTTP para que o navegador compartilhe a sessão e o progresso entre elas.

## Experimente

- No início, clique em **Começar a estudar** ou explore uma trilha do catálogo.
- Na tela de login, clique em **Preencher dados da demo** e depois em **Entrar no painel**. Os dados são `estudante@exemplo.com` e `estuda123`.
- No painel, filtre as trilhas, abra uma lição e marque-a como concluída. Reabra a mesma lição para marcá-la como pendente.
- Recarregue a página para conferir o progresso salvo. Use **Sair** para encerrar a sessão de demonstração.

## Arquivos

| Caminho | Conteúdo |
| --- | --- |
| `index.html` | Página inicial e catálogo |
| `paginas/login.html` | Formulário de entrada |
| `paginas/painel.html` | Painel, filtros e janela de lição |
| `css/estilo.css` | Identidade visual e regras responsivas |
| `js/dados.js` | Catálogo, lições e parâmetros da demonstração |
| `js/login.js` | Validação demonstrativa, exibição de senha e navegação |
| `js/painel.js` | Sessão, filtros, lições e atualização do progresso |

## Dados locais

O login é uma simulação feita no JavaScript do navegador. As credenciais são públicas e não oferecem autenticação ou controle de acesso seguro. Não use dados reais. A sessão usa sessionStorage e a ação **Sair** encerra essa sessão. O progresso usa localStorage e fica salvo no mesmo navegador e endereço, inclusive depois de sair. Limpar os dados do site apaga o progresso.
