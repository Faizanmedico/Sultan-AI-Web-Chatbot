
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');

function appendMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', `${sender}-message`);
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the latest message
}

function getBotResponse(userMessage) {
    userMessage = userMessage.toLowerCase();
    if (userMessage.includes('hello') || userMessage.includes('hi')) {
        return "Hello there!";
    } else if (userMessage.includes('how are you')) {
        return "I'm doing well, thank you for asking!";
    } else if (userMessage.includes('what is your name')) {
        return "I am a simple AI Chatbot.";
    } else if (userMessage.includes('bye') || userMessage.includes('goodbye')) {
        return "Goodbye! Have a great day!";
    } else {
        return "I'm not sure how to respond to that. Can you ask something else?";
    }
}

function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
        appendMessage(message, 'user');
        userInput.value = ''; // Clear the input

        // Simulate bot's response (replace with more complex logic later)
        setTimeout(() => {
            const botResponse = getBotResponse(message);
            appendMessage(botResponse, 'bot');
        }, 500); // Simulate a slight delay for the bot to "think"
    }
}

// Allow sending message with Enter key
userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});


