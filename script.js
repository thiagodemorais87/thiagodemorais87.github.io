// Modo Escuro
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Validação do Formulário de Contato
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name.length < 3) {
        formFeedback.textContent = "O nome deve ter pelo menos 3 caracteres.";
    } else if (!validateEmail(email)) {
        formFeedback.textContent = "Por favor, insira um email válido.";
    } else if (message.length < 10) {
        formFeedback.textContent = "A mensagem deve ter pelo menos 10 caracteres.";
    } else {
        formFeedback.textContent = "Formulário enviado com sucesso!";
        formFeedback.style.color = "green";
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Animação de Slide para Cards da Galeria
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transform = 'translateY(0)';
            card.style.opacity = '1';
        }, index * 200);
    });
});