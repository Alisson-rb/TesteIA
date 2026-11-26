/* Dados compartilhados pelo login e pelo painel. */
const demo = {
  email: 'estudante@exemplo.com',
  senha: 'estuda123',
  sessao: 'estuda.sessao',
  progresso: 'estuda.progresso'
};

const trilhas = [
  {
    id: 'matematica', nome: 'Matemática', simbolo: '∑', cor: 'verde',
    licoes: [
      { id: 'fracoes', titulo: 'Frações e proporções', texto: 'O denominador indica em quantas partes iguais o todo foi dividido. O numerador indica quantas dessas partes foram consideradas.', exemplo: 'Se você leu 3 de 12 capítulos, leu 3/12 do livro. Divida os dois números por 3 para obter 1/4.' },
      { id: 'porcentagens', titulo: 'Porcentagens no dia a dia', texto: 'Uma porcentagem representa uma fração de denominador 100. Para calcular uma porcentagem de um valor, multiplique o valor pela fração correspondente.', exemplo: 'Um desconto de 20% em R$ 80 vale R$ 16. O preço final é R$ 64.' }
    ]
  },
  {
    id: 'portugues', nome: 'Português', simbolo: 'Aa', cor: 'lilas',
    licoes: [
      { id: 'interpretacao', titulo: 'Ideia central de um texto', texto: 'A ideia central é o que o autor afirma sobre o assunto. Resumir o texto em uma frase ajuda a distingui-la dos detalhes.', exemplo: 'Em “A leitura diária amplia o vocabulário. Dez minutos por dia já são um começo”, a segunda frase oferece uma sugestão para aplicar a ideia central.' },
      { id: 'argumentacao', titulo: 'Tese e argumento', texto: 'A tese é a posição que o texto defende. O argumento explica por que o leitor deveria considerar essa posição.', exemplo: '“A escola deveria ampliar o horário da biblioteca” é uma tese. “Assim estudantes que trabalham pela manhã teriam mais oportunidades de usar o espaço” é um argumento.' }
    ]
  },
  {
    id: 'ciencias', nome: 'Ciências', simbolo: '✦', cor: 'amarelo',
    licoes: [
      { id: 'agua', titulo: 'O ciclo da água', texto: 'A água evapora da superfície, condensa-se em gotículas na atmosfera e pode retornar na forma de precipitação. Parte infiltra no solo e parte escoa pela superfície.', exemplo: 'Uma poça diminui ao sol porque parte da água passa do estado líquido para o gasoso.' },
      { id: 'ecossistemas', titulo: 'Cadeias alimentares', texto: 'Uma cadeia alimentar mostra a transferência de energia entre organismos. Plantas são produtoras. Animais que comem plantas ou outros animais são consumidores.', exemplo: 'Na cadeia capim → gafanhoto → sapo, o gafanhoto come o capim e pode servir de alimento para o sapo.' }
    ]
  }
];

const trilhaSolicitada = new URLSearchParams(location.search).get('trilha');
const trilhaInicial = trilhas.find(trilha => trilha.id === trilhaSolicitada);
const consultaTrilha = trilhaInicial ? '?trilha=' + trilhaInicial.id : '';
