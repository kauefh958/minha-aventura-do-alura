const storyElement = document.getElementById("story");
const choicesElement = document.getElementById("choices");
const messageElement = document.getElementById("message");

let story = [
    {
        text: "Você está na Escola Erasmo, um lugar conhecido por suas lendas assustadoras. À meia-noite, dizem que os sussurros ecoam pelos corredores. Agora, é exatamente meia-noite. Você está sozinho no corredor e pode escolher entre duas portas: uma à sua esquerda, que leva ao porão, e outra à sua direita, que leva ao laboratório. Qual você escolhe?",
        choices: [
            { text: "Ir ao porão", next: 1, correct: true },
            { text: "Ir ao laboratório", next: 2, correct: false }
        ]
    },
    {
        text: "Você desce as escadas do porão e sente um frio na espinha. As paredes estão cobertas de mofo, e você ouve um barulho vindo de um canto escuro. O que você faz?",
        choices: [
            { text: "Investigar o barulho", next: 3, correct: true },
            { text: "Voltar correndo", next: 4, correct: false }
        ]
    },
    {
        text: "No laboratório, você encontra frascos quebrados e materiais científicos espalhados. De repente, uma sombra se move rapidamente e você perde a coragem. Você se perde na escola. Tente novamente!",
        choices: [
            { text: "Tentar de novo", next: 0, correct: true }
        ]
    },
    {
        text: "Você se aproxima do canto escuro e encontra uma figura fantasmagórica. Ela se vira e sussurra seu nome. Você fica paralisado de medo. O que você faz?",
        choices: [
            { text: "Fugir", next: 5, correct: false },
            { text: "Encarar o fantasma", next: 6, correct: true }
        ]
    },
    {
        text: "Você corre de volta para o corredor e acaba se perdendo na escola. Tente novamente!",
        choices: [
            { text: "Tentar de novo", next: 0, correct: true }
        ]
    },
    {
        text: "Você tenta fugir, mas a figura te impede. Você se perde na escuridão. Tente novamente!",
        choices: [
            { text: "Tentar de novo", next: 0, correct: true }
        ]
    },
    {
        text: "Você encara o fantasma e ele se revela como um antigo professor da escola, que precisa de sua ajuda para libertar sua alma. Você encontra um caminho pela sala de aula. Você pode seguir para a sala de ciências ou ir para a biblioteca. O que você faz?",
        choices: [
            { text: "Ir para a sala de ciências", next: 7, correct: true },
            { text: "Ir para a biblioteca", next: 8, correct: false }
        ]
    },
    {
        text: "Na sala de ciências, você encontra um experimento inacabado e, ao ativá-lo, libera uma onda de energia que te paralisa. Tente novamente!",
        choices: [
            { text: "Tentar de novo", next: 0, correct: true }
        ]
    },
    {
        text: "Na biblioteca, você encontra um livro antigo que contém os segredos da escola. Mas ao abrir, uma criatura surge e te ataca. Tente novamente!",
        choices: [
            { text: "Tentar de novo", next: 0, correct: true }
        ]
    }
];

let currentStoryIndex = 0;

function displayStory() {
    const currentStory = story[currentStoryIndex];
    storyElement.textContent = currentStory.text;
    choicesElement.innerHTML = "";
    messageElement.textContent = "";

    currentStory.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.onclick = () => handleChoice(choice);
        choicesElement.appendChild(button);
    });
}

function handleChoice(choice) {
    if (choice.correct) {
        currentStoryIndex = choice.next;
        displayStory();
    } else {
        showErrorScreen(currentStoryIndex);
    }
}

function showErrorScreen(index) {
    storyElement.textContent = "";
    choicesElement.innerHTML = "";
    messageElement.textContent = "Escolha errada! " + explainWrongChoice(index) + " Você será redirecionado para o início.";

    setTimeout(() => {
        currentStoryIndex = 0; // Reinicia a história
        displayStory();
    }, 3000);
}

function explainWrongChoice(index) {
    switch (index) {
        case 0:
            return "O laboratório está cheio de segredos, e a sombra não é algo que você deve encarar.";
        case 1:
            return "Fugir do desconhecido não resolve os mistérios que a escola guarda.";
        case 3:
            return "Se você não enfrentar seus medos, pode acabar preso na escola para sempre.";
        case 6:
            return "Você não deve abrir livros antigos sem ter certeza do que está fazendo.";
        case 7:
            return "Experimentos não finalizados podem ser perigosos e incontroláveis.";
        default:
            return "Tente fazer uma escolha diferente.";
    }
}

// Inicia o jogo
displayStory();
