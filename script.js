const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Maria está perdida na floresta e tem que encontrar a casa da vovózinha. Ela tem duas escolhas: o caminho da direita e o da esquerda. No caminho da direita, ela encontrará um mapa para ajudar a encontrar o caminho da casa da vovó. Já no da esquerda, ela terá uma bússola para auxiliar no caminho.",

        alternativas: [
            {
                texto: "caminho da esquerda",
                afirmacao: "Sendo a escolha mais óbvia, Mariazinha foi pelo caminho da esquerda em direção à bússola, acreditando que poderia navegar pela floresta com mais precisão."
            },
            {
                texto: "caminho da direita",
                afirmacao: "Sendo a escolha mais óbvia, Mariazinha foi pelo caminho da direita em direção ao mapa, esperando que ele a guiasse de maneira clara até a casa da vovózinha."
            }
        ]
    },
    {
        enunciado: "No meio do caminho, Mariazinha começou a sentir fome. Ela avistou duas opções de comida: uma macieira cheia de maçãs vermelhas e uma moita de arbustos com frutas silvestres. Qual opção Mariazinha escolheu?",
        alternativas: [
            {
                texto: "maçãs",
                afirmacao: " Mariazinha escolheu as maçãs da macieira, lembrando que eram seguras e deliciosas, e comeu até se sentir satisfeita."
            },
            {
                texto: " frutas silvestres",
                afirmacao: "Mariazinha escolheu as frutas silvestres dos arbustos, acreditando que eram frescas e energéticas, e as saboreou enquanto continuava seu caminho."
            }
        ]
    },
    {
        enunciado: "Finalmente, Mariazinha avistou a casa da vovózinha ao longe. No entanto, ela percebeu dois caminhos que levavam até lá: um caminho reto e bem marcado, e um atalho pelo meio das árvores que parecia mais rápido, mas menos seguro. Qual caminho Mariazinha escolheu?",
        alternativas: [
            {
                texto: "caminho reto e bem marcado",
                afirmacao: "Mariazinha escolheu o caminho reto e bem marcado, preferindo a segurança e a certeza de que chegaria bem à casa da vovózinha."
            },
            {
                texto: "atalho pelo meio das árvores",
                afirmacao: "Mariazinha escolheu o atalho pelo meio das árvores, confiante de que chegaria mais rápido, mesmo sabendo que o caminho era um pouco arriscado."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "e entao Mariazinha";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
