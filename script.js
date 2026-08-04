const dicas = [
    "🧠 Método Pomodoro: Estude por 25 minutos sem olhar o celular e descanse 5. Seu cérebro vai voar!",
    "✍️ Explique a matéria para o seu espelho (ou seu pet). Se você conseguir explicar, você aprendeu!",
    "📅 Tenha um Planner (ou use o Notion). O cérebro foi feito para ter ideias, não para guardar datas de provas.",
    "🙋‍♀️ Faça perguntas na aula! Quem pergunta tira a dúvida na hora; quem se cala, sofre na véspera da prova.",
    "💧 Hidrate-se e durma! Uma mente cansada não absorve nem fofoca, quem dirá a matéria do boletim.",
    "🎨 Use cores nos seus resumos! Destacar conceitos importantes ajuda sua memória visual na hora do 'branco'.",
    "🤫 Regra de ouro: O melhor aluno não é o que estuda mais horas seguidas, mas o que estuda com consistência todos os dias."
];

const botao = document.getElementById('btn-dica');
const textoDica = document.getElementById('texto-dica');

botao.addEventListener('click', () => {
    // Sorteia um índice da lista de dicas
    const indiceAleatorio = Math.floor(Math.random() * dicas.length);
    
    // Altera o texto na tela
    textoDica.innerText = dicas[indiceAleatorio];
});
