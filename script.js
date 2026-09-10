const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ao analisar os crimes ambientais no Brasil, qual destes impactos desperta mais a sua urgência de combate?",
        alternativas: [
            {
                texto: "O tráfico de fauna retira mais de 38 milhões de animais da natureza por ano, ameaçando espécies em extinção.",
                afirmacao: "Você demonstra foco prioritário na proteção da fauna viva e na preservação do equilíbrio dos ecossistemas."
            },
            {
                texto: "O contrabando de fósseis retira patrimônios científicos irrepetíveis do país, vendendo a história da Terra para colecionadores.",
                afirmacao: "Você valoriza a salvaguarda da história natural brasileira e o combate ao saque do patrimônio científico."
            }
        ]
    },
    {
        enunciado: "Qual consequência socioeconômica e ambiental você considera mais alarmante?",
        alternativas: [
            {
                texto: "O comércio ilegal de animais favorece o risco de zoonoses e destrói o potencial do ecoturismo sustentável.",
                afirmacao: "Sua preocupação abrange a saúde pública, o bem-estar animal e o desenvolvimento sustentável."
            },
            {
                texto: "A destruição de sítios fossilíferos impede o avanço da ciência nacional e privatiza bens públicos inestimáveis.",
                afirmacao: "Você defende a pesquisa científica pública e o livre acesso ao conhecimento geológico do país."
            }
        ]
    },
    {
        enunciado: "Se você pudesse direcionar recursos públicos hoje, qual seria a sua prioridade principal?",
        alternativas: [
            {
                texto: "Aumentar a fiscalização contra o cativeiro ilegal e apoiar centros de reabilitação de animais silvestres (CETAS).",
                afirmacao: "Sua atuação busca soluções práticas de resgate, fiscalização e devolução das espécies à natureza."
            },
            {
                texto: "Reforçar a vigilância de fronteiras contra a saída de fósseis e financiar o repatriamento de acervos no exterior.",
                afirmacao: "Seu compromisso é com a soberania científica nacional e a recuperação da memória fóssil do país."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
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

function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o seu perfil de atuação:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();