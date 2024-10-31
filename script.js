/// Função para dissolver a página inicial, sem esconder a nova página
function showLandingPage() {
    const paginaInicial = document.getElementById('pagina-inicial');

    // Inicia a transição de opacidade (dissolvendo a página inicial)
    paginaInicial.style.opacity = '0';

    // Nenhuma necessidade de esconder a página inicial completamente, ela apenas se dissolve
}

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let offset = 0; // Deslocamento para a ondulação
const stripeHeight = 20; // Altura de cada listra

function drawStripes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas

    for (let i = 0; i < canvas.height / stripeHeight; i++) {
        const y = i * stripeHeight;
        const wave = Math.sin(i + offset) * 10; // Efeito de ondulação

        ctx.fillStyle = i % 2 === 0 ? '#bd0000' : '#000000'; // Cores das listras
        ctx.fillRect(0, y + wave, canvas.width, stripeHeight);
    }

    offset += 0.1; // Aumenta o deslocamento para animar
    requestAnimationFrame(drawStripes); // Repetir a animação
}

drawStripes(); // Inicia a animação
