const typingForm = document.querySelector(".typing-form");
const chatList = document.querySelector(".chat-list");

let userMessage = null;

// API configuration
const API_KEY = "AIzaSyC51-UlmMQqsWNmLUCALPheIdXVrbUywRU";
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;

// Crie um novo elemento de mensagem e retorne-o
const createMessageElement = (content, ...classes) => {
    const div = document.createElement("div");
    div.classList.add("message", ...classes);
    div.innerHTML = content;
    return div;
}

// Buscar resposta da API com base na mensagem do usuário
const generateAPIResponse = async (incomingMessageDiv) => {
    const textElement = incomingMessageDiv.querySelector(".text"); // Pegar a class text

    // Envie uma solicitação POST para a API com a mensagem do usuário
    try {
        const response = await fetch(API_URL, {
           method: "POST" ,
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify({
            contents: [{
                role: "user",
                parts: [{ text: userMessage }]
            }]
           })
        });

        const data = await response.json();

        const apiResponse = data?.candidates[0].content.parts[0].text;
        textElement.innerText = apiResponse;
    } catch (error) {
        console.log(error);
    } finally {
        incomingMessageDiv.classList.remove("loading");
    }
}

// Mostrar uma animação de carregamento enquanto aguarda a resposta da API
const showLoadingAnimation = () => {
    const html = `<div class="message-content">
                <img src="images/logo1.png" alt="Gemini Image" class="avatar">
                <p class="text"></p>
                <div class="loading-indicator">
                    <div class="loading-bar"></div>
                    <div class="loading-bar"></div>
                    <div class="loading-bar"></div>
                </div>
            </div>
            <span class="icon material-symbols-rounded">
                content_copy
                </span>`;

    const incomingMessageDiv = createMessageElement(html, "incoming", "loading");
    chatList.appendChild(incomingMessageDiv);

    generateAPIResponse(incomingMessageDiv);
}

const handleOutgoingChat = () => {
    userMessage = typingForm.querySelector(".typing-input").value.trim();
    if(!userMessage) return; // Sair se não tiver mensagem

    const html = `<div class="message-content">
                <img src="images/perfil.png" alt="User Image" class="avatar">
                <p class="text"></p>
            </div>`;

    const outgoingMessageDiv = createMessageElement(html, "outgoing");
    outgoingMessageDiv.querySelector(".text").innerText = userMessage;
    chatList.appendChild(outgoingMessageDiv);

    typingForm.reset(); // Limpar o input field
    setTimeout(showLoadingAnimation, 500); // Mostrar animação de carregamento após um delay
}

// Impede o envio do formulário padrão e gerencia o bate-papo
typingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    handleOutgoingChat();
})